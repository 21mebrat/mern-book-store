const httpError = require('../middleware/httpError')
const bookModel = require('../models/bookModel')
const orderModel = require('../models/orderModel')
const getAllOrders = async (req, res, next) => {
    res.send('yes it works')
}
// register orders
const AddOrders = async (req, res, next) => {
    try {
        const newOrder = new orderModel({
            ...req.body
        })
        await newOrder.save()
        res.status(200).json({ message: 'successfully send the order.' })
    } catch (error) {
        console.log(error)
        next(new httpError(error.message, 500))
    }
}
// get orders by email
const getOrdersByEmail = async (req, res, next) => {
    const { email } = req.params
    try {
        const orders = await orderModel.find({ email }).sort({ createdAt: -1 })
        if (!orders) return next(new httpError('No order with This Email.'))
        res.status(200).json(orders)
    } catch (error) {
        console.log(error)
        next(new httpError(error.message, 500))
    }
}
//get order info

const getOrdersInfo = async (req, res, next) => {
    try {
        const totalOrders = await orderModel.countDocuments()
        // prices of total selled
        const totalSales = await orderModel.aggregate([
            {
                $group: {
                    _id: null,
                    totalSales: { $sum: "$totalOrders" }
                }
            }
        ])
        const countingTrendingBooks = await bookModel.aggregate([
            {
                $match: { trend: true }
            },
            { $count: "countingTrendingBooks" }
        ])
        const trendingBooks = countingTrendingBooks.length > 0 ? countingTrendingBooks[0].countingTrendingBooks : 0
        const totalBooks = bookModel.countDocuments()

        // const monthlySale = await orderModel.aggregate([
        //     {
        //         $group: {
        //             _id: { $dateToString: { format: "%y-%m", date: "$createdAt" } },
        //             totalSales: { $sum: "$totalOrders" },
        //             totalOrders: 1
        //         }
        //     },
        //     { $sort: { _id: 1 } }
        // ])

        res.status(200).json({totalBooks:totalBooks})
    } catch (error) {
        console.log(error)
        next(new httpError(error.message, 500))
    }

}

module.exports = {
    getAllOrders,
    AddOrders,
    getOrdersByEmail,
    getOrdersInfo
}