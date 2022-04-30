const express = require('express')
const router = express.Router()

const {
  newCart,
  getCartItems,
  addProductInCart,
  deleteProductFromCart,
  deleteCart,
} = require('../controllers/cartController')

const { isAuthenticatedUser } = require('../middlewares/auth')

router.route('/cart/new').post(isAuthenticatedUser, newCart)
router.route('/cart/:id').get(isAuthenticatedUser, getCartItems)
router.route('/cart/addItem').post(isAuthenticatedUser, addProductInCart)
router
  .route('/cart/deleteItem')
  .post(isAuthenticatedUser, deleteProductFromCart)
router.route('/cart/delete/:id').get(isAuthenticatedUser, deleteCart)

module.exports = router
