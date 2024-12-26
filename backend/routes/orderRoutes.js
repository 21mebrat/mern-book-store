const express = require('express')
const {
    getAllOrders,
    AddOrders,
    getOrdersByEmail,
    getOrdersInfo
} = require('../controllers/orderControllers')
const router = express.Router()

router.get('/get', getAllOrders)
router.post('/post', AddOrders)
router.get('/get/:email', getOrdersByEmail)
router.get('/get-sale-info', getOrdersInfo)


module.exports = router