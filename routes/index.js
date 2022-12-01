const router = require('express').Router()

const Auth = require('./auth')

// API server
router.use('/api/v1/auth/', Auth)

module.exports = router
