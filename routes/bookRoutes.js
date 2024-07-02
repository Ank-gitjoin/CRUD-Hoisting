const express = require('express');
const router = express.Router();

const { getAll, getBook, register, updateBook, deleteBook } = require('../controllers/bookController');


// routes
router.get('/books', getAll);
router.get('/books/:id', getBook);
router.post('/create', register);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);


module.exports = router;