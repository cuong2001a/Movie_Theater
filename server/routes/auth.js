const express = require("express")
const {signUpUser, loginUser, refreshToken, logout, forgotPassword, resetFwPassword} = require("../controller/auth")

// controller Function
const router = express.Router()

// sign up route
router.post("/signup", signUpUser)

// login route
router.post("/login", loginUser)

// refresht token
router.post("/refresh-token", refreshToken)

// sign out route
router.get("/signout", logout)

// forgotpassword
router.post("/forgot", forgotPassword)

// reset password
router.post("/reset-pw", resetFwPassword)

module.exports = router
