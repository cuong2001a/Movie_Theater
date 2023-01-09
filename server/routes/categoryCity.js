import {
  categoryById,
  createCategory,
  deleteCategory,
  listCategory,
  readCategory,
  updateCategory,
} from "../controller/categoryCity"
import {findUserByID} from "../controller/user"
import requireAuth from "../middleware/requireAuth"
const {isAdmin, isAuth, requireSignIn} = require("../controller/auth")
const express = require("express")
const router = express.Router()

router.get("/categories", listCategory)
router.get("/categories/:cateId", readCategory)
router.post("/categories", requireAuth, isAdmin, createCategory)
router.delete("/categories/:cateId/:userId", requireAuth, isAdmin, deleteCategory)
router.put("/categories/:cateId/:userId", requireAuth, isAdmin, updateCategory)
router.param("cateId", categoryById)
router.param("userId", findUserByID)
module.exports = router
