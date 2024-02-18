const { default: mongoose } = require('mongoose')

const randomMenuResultSchema = mongoose.Schema({
  id: Number,
  title: String,
  img: String,
  totalRescipe: Number,
})

const menuRecipeSchema = mongoose.Schema(
  {
    menuId: Number,
    rating: Number,
    user: String,
    calories: Number,
    cooktime: Number,
    ingredients: { id: Number, name: String, price: Number, unit: Number, type: String },
    step: [],
  },
  { timestamps: true }
)

module.exports = mongoose.model('randomresult', randomMenuResultSchema)
module.exports = mongoose.model('menurecipe', menuRecipeSchema)
