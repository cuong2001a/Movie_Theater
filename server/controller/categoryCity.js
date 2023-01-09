const CategoryCity = require("../models/categoryCity")

export const createCategory = (req, res) => {
  const category = new CategoryCity(req.body)

  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Create failed",
      })
    } else {
      res.json({
        data,
      })
    }
  })
}

export const listCategory = (req, res) => {
  CategoryCity.find((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Get list category failed",
      })
    }
    res.json({
      data,
    })
  })
}

export const categoryById = (req, res, next, id) => {
  CategoryCity.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json({
        error: "Can't not find category",
      })
    }
    req.cate = data
    next()
  })
}

export const readCategory = (req, res) => {
  return res.json(req.cate)
}

export const deleteCategory = (req, res) => {
  let cate = req.cate
  cate.remove((err, deleteCate) => {
    if (err || !cate) {
      return res.status(400).json({
        error: "Delete category failure",
      })
    }
    res.json({
      deleteCate,
      message: "Delete category successfully",
    })
  })
}

export const updateCategory = (req, res) => {
  let cate = req.cate
  cate = cate.assign(cate, req.body)
  cate.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Update category failure",
      })
    }
    res.json({
      data,
      message: "Update category successfully",
    })
  })
}
