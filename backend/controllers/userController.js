const httpError = require('../middleware/httpError')
const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const registerUsers = async (req, res, next) => {
    try {
        res.send('yes it works')
    } catch (error) {

    }
}

// login
const login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const userFound = await userModel.findOne({ email })
        if (!userFound) return next(new httpError('InValid Email.please Enter The Correct Email!.'))
        if (password !== userFound.password) return next(new httpError('Please Enter Correct password!.'))
        const userInfo = {
            email: email,
            role: userFound.role
        }
        console.log('it work p')
        const token = jwt.sign({id:'hello'},
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1h' }
        )
        res.status(200).json({
            email,
            token,
            role: userFound.role
        })
    } catch (error) {
        next(new httpError(error.message, 500))
    }

}


module.exports = {
    registerUsers,
    login
}