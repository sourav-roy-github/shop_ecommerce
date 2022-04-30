const Cart = require('../models/cart')

const ErrorHandler = require('../utils/errorHandler')

const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

const APIFeatures = require('../utils/apiFeatures')

const Product = require('../models/product')

//CREATE NEW CART
exports.newCart = catchAsyncErrors(async (req, res, next) => {
  const { cartItems, totalPrice, totalQuantity } = req.body

  const cart = await Cart.create({
    cartItems,
    totalPrice,
    totalQuantity,
    createdAt: Date.now(),
    user: req.user._id,
  })

  res.status(201).json({
    success: true,
    cart,
  })
})

//GET ALL CARTITEMS
exports.getCartItems = catchAsyncErrors(async (req, res, next) => {
  const cart = await Cart.find({ user: req.params.id })
  if (cart.length === 0) {
    await Cart.create({
      cartItems: [],
      totalPrice: 0,
      totalQuantity: 0,
      createdAt: Date.now(),
      user: req.params.id,
    })
  }
  res.status(200).json({
    success: true,
    cart,
  })
})

// Add product to Cart   =>   /api/v1/cart/addItem/
exports.addProductInCart = catchAsyncErrors(async (req, res, next) => {
  const { user, product_id, quantity } = req.body
  let cartItems = []
  let cartid = {}
  let product = await Product.findById(product_id)
  let image = ''

  product.images.forEach((element) => {
    image = element.url
  })

  const productFromCart = await Cart.find(
    {
      user: user,
    },
    { cartItems: { $elemMatch: { product: product_id } } },
  )

  let prodFromCart = null
  let prevQuantity = 0
  let cartItemID = {}

  productFromCart.forEach((element) => {
    element.cartItems.forEach((e) => {
      cartItemID = e._id
      prodFromCart = e.product
      prevQuantity = e.quantity
    })
  })

  if (prodFromCart != null) {
    prevQuantity = prevQuantity + quantity
    let updatedPrice = prevQuantity * product.price
    await Cart.updateMany(
      {
        'cartItems._id': cartItemID,
      },
      {
        $set: {
          'cartItems.0.quantity': prevQuantity,
          'cartItems.0.price': updatedPrice,
        },
      },
      {
        new: true,
        runValidators: true,
      },
    )
  }
  const apiFeatures = new APIFeatures(Cart.find(), user).search().filter()
  const cartdetails = await apiFeatures.query

  cartdetails.forEach((element) => {
    cartid = element._id
    if (prodFromCart == null) {
      element.cartItems.push({
        name: product.name,
        quantity: quantity,
        image,
        price: product.price * quantity,
        stock: product.stock,
        product: product,
      })
    }
    cartItems = element.cartItems
  })

  let totalAmount = 0
  let totalQuantity = 0
  cartItems.forEach((c) => {
    totalAmount += c.price
    totalQuantity += c.quantity
  })

  const cart = await Cart.findByIdAndUpdate(
    cartid,
    {
      user: req.user._id,
      cartItems: cartItems,
      totalPrice: totalAmount,
      totalQuantity: totalQuantity,
      createdAt: Date.now(),
    },
    {
      new: true,
      runValidators: true,
    },
  )

  res.status(200).json({
    success: true,
    cart,
  })
})

//Delete Product from cart /api/v1/cart/deleteItem/
exports.deleteProductFromCart = catchAsyncErrors(async (req, res, next) => {
  const { userID, productID } = req.body
  let totalPrice = 0
  let totalQuantity = 0
  let deleteProdPrice = 0
  let deleteProdQuantity = 0
  let cartItemID = {}
  let cartID = {}
  const cart = await Cart.find({ user: userID })
  cart.forEach((element) => {
    cartID = element._id
    totalPrice = element.totalPrice
    totalQuantity = element.totalQuantity
  })

  const cartItemToBeDeleted = await Cart.find(
    {
      _id: cartID,
    },
    { cartItems: { $elemMatch: { product: productID } } },
  )

  cartItemToBeDeleted.forEach((element) => {
    element.cartItems.forEach((e) => {
      cartItemID = e._id
      deleteProdPrice = e.price
      deleteProdQuantity = e.quantity
    })
  })

  let updatedTotalPrice = totalPrice - deleteProdPrice
  let updatedQuantity = totalQuantity - deleteProdQuantity

  await Cart.updateOne(
    {
      _id: cartID,
    },
    {
      $pull: {
        cartItems: {
          _id: cartItemID,
        },
      },
    },
  )

  await Cart.updateOne(
    {
      _id: cartID,
    },
    {
      $set: {
        totalPrice: updatedTotalPrice,
        totalQuantity: updatedQuantity,
      },
    },
  )

  res.status(200).json({
    success: true,
    message: 'Product is deleted',
  })
})

//Delete cart /api/v1/cart/delete/
exports.deleteCart = catchAsyncErrors(async (req, res, next) => {
  const cart = await Cart.find({ user: req.params.id })
  let cartid = {}
  cart.forEach((element) => {
    cartid = element._id
  })

  const cartDel = await Cart.findById(cartid)
  await cartDel.remove()

  res.status(200).json({
    success: true,
    message: 'Cart is deleted',
  })
})
