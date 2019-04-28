const express = require('express');
const router = express.Router();

const booksRouter = require('./books');
const authorsRouter = require('./authors');
const reviewsRouter = require('./reviews');


// Routes
router.use('/books', booksRouter);
router.use('/authors', authorsRouter);
router.use('/reviews', reviewsRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


module.exports = router;
