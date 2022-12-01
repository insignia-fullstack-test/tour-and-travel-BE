const router = require('express').Router()

// controller
const Order = require('../controller/orderController')

// middlewares
const Authentication = require('../middlewares/authenticate')
const checkRole = require('../middlewares/checkRole')

router.get('/', Authentication, checkRole('Admin'), Order.findAllOrders)
router.post('/', Authentication, Order.createOrder)
router.get('/search', Authentication, Order.searchOrder)
router.get('/customer', Authentication, Order.findOrderByCustomerId)
router.get('/:id', Authentication, Order.findOrderById)

module.exports = router
