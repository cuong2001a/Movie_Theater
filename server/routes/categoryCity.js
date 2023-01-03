import {isAdmin, isAuth, requireSignIn} from "../controller/auth"
import {
  categoryById,
  createCategory,
  deleteCategory,
  listCategory,
  readCategory,
  updateCategory,
} from "../controller/categoryCity"
import {findUserByID} from "../controller/user"
const express = require("express")
const router = express.Router()

router.get("/categories", listCategory)
router.get("/categories/:cateId", readCategory)
router.post("/categories", createCategory),
  router.delete("/categories/:cateId/:userId", requireSignIn, isAuth, isAdmin, deleteCategory)
router.put("/categories/:cateId/:userId", requireSignIn, isAuth, isAdmin, updateCategory)
router.param("cateId", categoryById)
router.param("userId", findUserByID)
module.exports = router
