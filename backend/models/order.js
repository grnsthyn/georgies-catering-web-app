const mongoose = require('mongoose')
const validator = require('validator')

const orderSchema = new mongoose.Schema({
    customer_info: [
        {
            full_name:{
                type: String,
                required: [true, 'Please enter your name'],
                trim: true
            },
            contact_number: {
                type: String,
                required: [true, 'Please enter product size'],
                trim: true
            },
            email: {
                type: String,
                required: [true, 'Please enter your email address'],
                unique: true,
                validate: [validator.isEmail, 'Please enter a valid email address']
            },
            address: {
                type: String,
                required: [true, 'Please enter destination address'],
                trim: true
            }

        }
    ],
    orders:[
        {
            price:{
                type: String,
                required: [true, 'Please enter your name'],
                trim: true
            },
            quantity: {
                type: String,
                required: [true, 'Please enter product size'],
                trim: true
            },
            size: {
                type: String,
                required: [true, 'Please enter your email address'],
                unique: true,
                validate: [validator.isEmail, 'Please enter a valid email address']
            },
            name:{
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref:'Product'
            }
        }
    ],
    delivery_mode:{
        type: String,
        required: [true, 'Please select if delivery or pickup'],
        trim: true
    },
    status:{
        type: String,
        required: true
    },
    total_price:{
        type: String,
        required: true,
    },
    order_date:{
        type: Date,
        required: true,
        default: new Date(Date.now())
    },
    delivery_date:{
        type: Date,
        required: true
    }
    
})

module.exports = mongoose.model('Order', orderSchema)