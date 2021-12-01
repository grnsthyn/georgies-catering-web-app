const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler')
const sendEmail = require('../utils/sendEmail')

const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');

// Register a user => /api/v1/registered users
exports.registerUser = catchAsyncErrors(async (req, res, next) => {

    const { full_name, email, password } = req.body;

    const user = await User.create(req.body)

    sendToken(user, 200, res)
    

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
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    sendToken(user, 200, res)

})

// forgot password => /a
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if(!user){
        return next(new ErrorHandler('User not found with this email', 404));
    }

    // get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false })

    // create reset password urlencoded
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`;
    const message = `Your password reset token is as follows:\n\n${resetUrl}\n\nIf You have not requested this email, then ignore this message.`

    try{

        await sendEmail({
            email: user.email, 
            subject: 'Georgies Catering Password Recovery',
            message
        })

        res.status(200).json({ 
            success: true,
            message: `Email sent to ${user.email}`
        })

    }catch(error){
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500))
    }
})

// Logout user => api/v1/Logout
exports.logout = catchAsyncErrors( async( req, res, next) => {
    res.cookie('token', null, { 
        expires: new Date(Date.now()), 
        httpOnly: true
    })


    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
})