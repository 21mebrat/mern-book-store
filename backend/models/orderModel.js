const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: {
        city: {
            type: String,
            required: true
        },
        country: String,
        state: String,
        zipcode: String,
    },
    phone: {
        type: Number,
        required: true
    },
    productId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Books',
            required: true
        }
    ],
    totalPrice: { type: Number, required: true }
},
    { timestamps: true }
)

const orderModel = mongoose.model('order', orderSchema)
module.exports = orderModel