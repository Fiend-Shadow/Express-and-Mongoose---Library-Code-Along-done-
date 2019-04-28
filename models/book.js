const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const reviewSchema = require('./schemas/reviewSchema');

const bookSchema = new Schema({
  title: String,
  description: String,
  author: [ { type : Schema.Types.ObjectId, ref: 'Author' } ],
  rating: Number,
  reviews: [reviewSchema]
}, {
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;