const jwt = require('jsonwebtoken')
const httpError = require('./httpError')
require('dotenv').config()
module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization
    if (!authHeader) return next(new httpError('header are not sent', 403))
    const token = authHeader.split(' ')[1]
    if (!token) return res.sendStatus(403)
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    if (!decoded) return next(new httpError('incorrect credental', 403))
        req.body = decoded.userInfo
    console.log(decoded)
    next()



    try {

    } catch (error) {

    }
}