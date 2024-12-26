const express = require('express')
const { 
    uploadBooks,
     getAllBooks,
     getBookById,
     updateBook,
     deleteBook
     } = require('../controllers/bookController')

const router = express.Router()
// books route
router.post('/add', uploadBooks)
router.get('/get', getAllBooks)
router.get('/get/:id', getBookById)
router.patch('/edit/:id', updateBook)
router.delete('/delete/:id', deleteBook)

module.exports = router