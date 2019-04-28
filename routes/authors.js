// authors router
const express = require('express');
const router = express.Router();
const Author = require('./../models/author');


// GET  /authors/add
router.get('/authors/add', (req, res, next) => {
  res.render("author-add");
});

// POST  /authors/add
router.post('/authors/add', (req, res, next) => {
  const { name, lastName, nationality, birthday, pictureUrl } = req.body;
  const newAuthor = new Author({ name, lastName, nationality, birthday, pictureUrl})
  
  newAuthor.save()
  .then((book) => res.redirect('/books'))
  .catch((error) => console.log(error));
});

module.exports = router;