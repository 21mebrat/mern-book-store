const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title:{type:String,required:true},
    category:{type:String,require:true},
    description:{type:String,required:true},
    trend:{type:Boolean},
    coverImage:{type:String,required:true},
    oldPrice:Number, 
    newPrice:Number,
    createdAt:{
        type:Date,
        default: Date.now
    }
})
const bookModel = mongoose.models.Books || mongoose.model('Books',bookSchema)
module.exports = bookModel