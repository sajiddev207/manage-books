const express = require('express')
const router = express.Router();
const { addBook, updateBook, deleteBook, getAllBookList, getBookByBookId } = require('../controllers/bookController')


router.post('/addBook', addBook)
router.put('/updateBook', updateBook)
router.delete('/deleteBook/:id', deleteBook)
router.get('/getAllBookList', getAllBookList)
router.get('/getBookByBookId/:id', getBookByBookId)


module.exports = router;