const router = require('express').Router()

// controller
const Product = require('../controller/travelPackageController')

// middlewares
const Authentication = require('../middlewares/authenticate')
const Uploader = require('../middlewares/uploader')
const checkRole = require('../middlewares/checkRole')

router.get('/', Product.findAllProducts)
router.post('/',
  Uploader.single('image'),
  Product.createProduct
)
router.get('/search', Authentication, Product.searchProduct)
router.get('/ownership', Authentication, checkRole('Admin'), Product.findProductsByOwnership)
router.get('/:id', Authentication, Product.findProductById)
router.put('/:id',
  Authentication,
  checkRole('Admin'),
  Product.updateProduct
)
router.delete('/:id', Authentication, checkRole('Admin'), Product.deleteProduct)

module.exports = router
