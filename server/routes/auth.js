const express = require('express')

// controller Function
const {loginUser, signUpUser, logout} = require('../controller/auth')
const router = express.Router();

// sign up route
router.post('/signup', signUpUser);

// login route
router.post('/login', loginUser);

// sign out route
router.get('/signout', logout)
module.exports = router;