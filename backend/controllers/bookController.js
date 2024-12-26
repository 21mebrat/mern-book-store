// upload books

const httpError = require("../middleware/httpError")
const bookModel = require("../models/bookModel")

const uploadBooks = async (req, res, next) => {
    try {
        const isExist = await bookModel.findOne({title:req.body.title})
        if (isExist) return next(new httpError('Book is already Exit.', 409))
        const newBook = new bookModel({ ...req.body })
        await newBook.save()
        res.status(200).json({ message: 'Successfully upload the Book', ...newBook._doc })
    } catch (error) {
        next(new httpError(error.message, 500))
    }
}
const getAllBooks = async (_req, res, next) => {
    try {
        const books = await bookModel.find({})
        if (!books) return next(new httpError('Your Db is Empty ', 400))
        res.status(200).json(books)
    } catch (error) {
      return  next(new httpError(error.message, 500))
    }
}
const getBookById = async (req, res, next) => {
    const {id} =  req.params
    try {
        const book = await bookModel.findById(id)
        if (!book) return next(new httpError('No Book With This Id ', 400))
        res.status(200).json(book)
    } catch (error) {
      return  next(new httpError(error.message, 500))
    }
}
const updateBook = async (req, res, next) => {
    const {id} =  req.params
    try {
        const book = await bookModel.findByIdAndUpdate(id,{...req.body},{new:true})
        if (!book) return next(new httpError('No Book With This Id ', 400))
        res.status(200).json({message:'successfully update the book.',book })
    } catch (error) {
      return  next(new httpError(error.message, 500))
    }
}
const deleteBook = async (req, res, next) => {
    const {id} =  req.params
    try {
        const book = await bookModel.findByIdAndDelete(id)
        if (!book) return next(new httpError('No Book With This Id ', 400))
        res.status(200).json({message:'successfully Delete the book.'})
    } catch (error) {
      return  next(new httpError(error.message, 500))
    }
}

module.exports = {
    uploadBooks,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}