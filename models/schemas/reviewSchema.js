const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const reviewSchema = new Schema({
  user: String,
  comments: String
});


module.exports = reviewSchema;