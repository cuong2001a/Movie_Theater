const express = require("express")
const {requireSignIn, isAuth, isAdmin} = require("../controller/auth")
const {listCategory} = require("../controller/categoryCity")
const {theaterById, readTheater, createTheater, deleteTheater, updateTheater} = require("../controller/theater")
const {findUserByID} = require("../controller/user")
const router = express.Router()

router.get("/theater", listCategory)
router.get("/theater/:theaterId", readTheater)
router.post("/theater", requireSignIn, isAuth, isAdmin, createTheater)
router.delete("/theater/:theaterId/:userId", requireSignIn, isAuth, isAdmin, deleteTheater)
router.put("theater/:theaterId/:userId", requireSignIn, isAuth, isAdmin, updateTheater)
router.param("theaterId", theaterById)
router.param("userId", findUserByID)
module.exports = router
