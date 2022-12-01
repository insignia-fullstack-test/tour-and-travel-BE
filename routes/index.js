const router = require('express').Router()

const Auth = require('./auth')
const Product = require('./travelPackage')

// API server
router.use('/api/v1/auth/', Auth)
router.use('/api/v1/products/', Product)

module.exports = router
