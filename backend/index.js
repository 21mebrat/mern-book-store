const express = require('express')
require('dotenv').config()
const dbConnection = require('./config/db')
const bookRouter = require('./routes/bookRoute')
const orderRouter = require('./routes/orderRoutes')
const userRouter = require('./routes/userRoute')
const cors = require('cors')

const app = express()
//Global Middleware
app.use(express.static('upload'))
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
// app router
app.use('/api/book', bookRouter)

//order routes 
app.use('/api/order',orderRouter)

// auth routes
app.use('/api/auth',userRouter)
//Error Middleware

app.use((err, req, res, next) => { 
    if (err.isOperational) {
        err.status = err.status || 'error'
        err.statusCode = err.statusCode || 500
        err.message = err.message
        res.status(err.statusCode).json({status:err.status, message: err.message })
    } else {
        res.status(500).json({status:err.status, message: 'Something go wrong.' })
    }
})
const appConfigure = () => {
    try {
        app.listen(process.env.PORT, () => console.log('server runing on port ' + process.env.PORT))
        dbConnection()
        console.log('db connects successfully.')
    } catch (error) {
        console.log('configure error', error)
    }
}
appConfigure()