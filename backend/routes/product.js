const express = require('express')
const router = express.Router()

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
} = require('../controllers/productController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

router.route('/products').get(getProducts)

router.route('/products/:id').get(getSingleProduct)

router
  .route('/admin/product/new')
  .post(isAuthenticatedUser, authorizeRoles('admin'), newProduct)

router
  .route('/admin/products/:id')
  .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)

router
  .route('/admin/products/:id')
  .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct)

router.route('/review').put(isAuthenticatedUser, createProductReview)

module.exports = router
