const express = require('express')

// controller Function
const {loginUser, signUpUser, logout, refreshToken, forgotPassword, resetFwPassword} = require('../controller/auth')
const router = express.Router()

// sign up route
router.post('/signup', signUpUser)

// login route
router.post('/login', loginUser)

// refresht token
router.post('/refresh-token', refreshToken)

// sign out route
router.get('/signout', logout);

// forgotpassword
router.post('/forgot',forgotPassword)

// reset password
router.post('/reset-pw/:id/:token', resetFwPassword)

module.exports = router;