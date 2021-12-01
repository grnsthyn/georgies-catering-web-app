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

// Login User  =>  /a[i/v1/login]
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    // Checks if email and password is entered by user
    if(!email || !password) {
        return next(new ErrorHandler('Please enter email & password', 400))
    }

    //Finding user in databaseName
    const user = await User.findOne({ email }).select('+password')

    if(!user) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    // Check if password is correct
    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched) {
        return next(new ErrorHandler('haha Email or Password', 401));
    }

    const token = user.getJwtToken();

    res.status(200).json({
        success: true,
        token
    })

    
})