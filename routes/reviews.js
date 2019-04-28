// reviews router
const express = require('express');
const router = express.Router();
const Book = require('./../models/book');

// POST /reviews/add
router.post('/add', (req, res, next) => {
  const { _id } = req.query;
  const { user, comments } = req.body;
  
  Book.updateOne(
      { _id }, 
      { $push: { reviews: { user: user, comments: comments }}} , {new: true}
    )
    .then( (book) => {
      // res.redirect('/books');
      res.redirect(`/books/details/${_id}`);      
    })
    .catch((error) => console.log(error))
});


module.exports = router;