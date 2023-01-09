const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CategoryCitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 32,
      unique: true,
    },
  },
  {timestamps: true, collection: "CategoryCity"}
)

module.exports = mongoose.model("CategoryCity", CategoryCitySchema)
