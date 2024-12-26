const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        required: true
    }
})
userSchema.pre('save', async function (next) {
    if (!this.isModified(password)) return next()
    this.password = await bcryptjs.hash(this.password, 10)
    next()
})
 

const userModel = mongoose.model('users', userSchema)

module.exports = userModel