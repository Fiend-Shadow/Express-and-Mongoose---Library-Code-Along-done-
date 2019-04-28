// books router
const express = require('express');
const router = express.Router();
const Book = require('./../models/book');

// GET /books/add
router.get('/add', (req, res, next) => {
  res.render('book-add');
});

// POST /books/add
router.post('/add', (req, res, next) => {
  const { title, author, description, rating } = req.body;
  const newBook = new Book({ title, author, description, rating });

  newBook.save()
    .then( (result) => res.redirect('/books'))
    .catch( (err) => console.log(err));
});


// GET  /books/edit
router.get('/edit', (req, res, next) => {
  const { _id } = req.query;

  Book.findOne( { _id } )
    .then( (book) =>  res.render('book-edit', {book}))
    .catch( (err) => console.log(err));
});

// POST  /books/edit
router.post('/edit', (req, res, next) => {
  const { _id } = req.query;
  const { title, author, description, rating } = req.body;

  Book.update( { _id }, { $set : {title, rating, author, description } })
    .then( (data) => res.redirect('/books'))
    .catch( (err) => console.log(err));
});


// GET  /books/details/:bookId
router.get('/details/:bookId', (req, res, next) => {
  Book.findById(req.params.bookId)
  	.populate('author')	// Checks the `authors` collection and populates `Author` ref
    .then( (book) => res.render('book-details', {book}))
    .catch( (err) => console.log('Error retrieving book details', err));
});





// GET /books
router.get('/', (req, res, next) => {
  Book.find({})
  .then( (allTheBooksFromDB) => res.render('books', { allTheBooksFromDB } ))
  .catch( (err) => console.log(err));
});

module.exports = router;