const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler')

const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

// Register a user => /api/v1/registered users
exports.registerUser = catchAsyncErrors(async (req, res, next) => {

    const { full_name, email, password } = req.body;

    const user = await User.create(req.body)


    const token = user.getJwtToken();

    res.status(201).json({
        success: true,
        token
    })

})


