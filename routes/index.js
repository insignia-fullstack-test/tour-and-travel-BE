const router = require('express').Router()

const Auth = require('./auth')
const Product = require('./travelPackage')
const Order = require('./order')

// API server
router.use('/api/v1/auth/', Auth)
router.use('/api/v1/products/', Product)
router.use('/api/v1/order/', Order)

module.exports = router
