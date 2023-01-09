const Theater = require("../models/theater")

export const createTheater = (req, res) => {
  const theater = new Theater(req.body)

  theater.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Create failed",
      })
    }
    res.json({
      data,
    })
  })
}

export const listTheater = (req, res) => {
  Theater.find()
    .populate("typeCate")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: "Get list theater failed",
        })
      }
      res.json({
        data,
      })
    })
  // let body = JSON.parse(req.body)
  // let agg = {}
  // if (body.name) {
  //   agg.name = body.name
  // }
  // Theater.aggregate([
  //   {
  //     $match: agg,
  //   },
  //   {
  //     $project: {
  //       name: 1,
  //     },
  //   },
  //   {
  //     $lookup:{
  //       from:'CategoryCity',
  //       localField: 'typeCate',
  //       foreignField: 'typeCate',
  //       as: "typeCate123213"
  //     }
  //   },
  //   {$unwind:"$typeCate123213"}
  // ])
}

export const theaterById = (req, res, next, id) => {
  Theater.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json({
        error: "Can't not find theater",
      })
    }
    req.theater = data
    next()
  })
}

export const readTheater = (req, res) => {
  return res.json(req.theater)
}

export const deleteTheater = (req, res) => {
  let theater = req.theater
  theater.remove((err, deleteTheater) => {
    if (err || !cate) {
      return res.status(400).json({
        error: "Delete theater failure",
      })
    }
    res.json({
      deleteTheater,
      message: "Delete category successfully",
    })
  })
}

export const updateTheater = (req, res) => {
  let theater = req.theater
  theater = theater.assign(theater, req.body)
  theater.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Update theater failure",
      })
    }
    res.json({
      data,
      message: "Update theater successfully",
    })
  })
}
