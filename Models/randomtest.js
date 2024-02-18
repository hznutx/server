const mongoose = require('mongoose')

const randomtestSchema = new mongoose.Schema(
  {
    id: Number,
    img: String,
    ingredients: [],
    matchprice: [],
    unit: [],
    calories: String,
    cooktime: String,
    howto: [],
    title: String,
  },
  { timestamps: true }
)

module.exports = mongoose.model('randomtest', randomtestSchema)
