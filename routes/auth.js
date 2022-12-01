const router = require('express').Router()

// controller
const Auth = require('../controller/authController')

// middleware
const Authentication = require('../middlewares/authenticate')

// API auth
router.post('/register', Auth.register)
router.post('/login', Auth.login)
router.get('/me', Authentication, Auth.me)

module.exports = router
