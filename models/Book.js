const { model, Schema } = require('mongoose')

const Book = new Schema({
  title: String,
  authors: String,
  description: String,
  image: String,
  link: String
}, { timestamps: true })

module.exports = model('Book', Book)
