const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  orderItems: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
    },
  ],
})

module.exports = mongoose.model('Order', orderSchema)
