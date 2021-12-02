const Order = require('../models/order');
const Product = require('../models/product');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// create a new order => /api/v1/order/new
exports.newOrder = catchAsyncErrors( async(req,res,next) => {
    const{ 

        customer_info,
        orders,
        delivery_mode,
        status,
        total_price,
        order_date,
        delivery_date

    } = req.body;

    const order = await Order.create(
        { 
        customer_info,
        orders,
        delivery_mode,
        status,
        total_price,
        order_date,
        delivery_date
    }
    )

})