const mongoose = require("mongoose")
const Schema = mongoose.Schema

const {ObjectId} = mongoose.Schema

const TheaterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 52,
      unique: true,
    },
    address: {
      type: String,
      trim: true,
      maxLength: 244,
      unique: true,
    },
    typeCate: {
      type: ObjectId,
      ref: "CategoryCity",
      required: true,
    },
    link: {
      type: String,
      trim: true,
    },
  },
  {timestamps: true, collection: "Theater"}
)

module.exports = mongoose.model("Theater", TheaterSchema)
