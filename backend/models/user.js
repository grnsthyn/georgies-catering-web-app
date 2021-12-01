const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    full_name:{
        type: String,
        required: [true, 'Please enter your name'],
        
    },
    email: {
        type: String,
        required: [true, 'Please enter your email address'],
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email address']
    },
    password:{
        type: String,
        required: [true, 'Please enter your password'],
        minLength: [6, 'Passwords must be at least 6 characters long'],
        select: false
    },
    username:{
        type: String,
        required: [true, 'Please enter your username'],
        minLength: [6, 'Username must be at least 6 characters long'],
    },
    role: {
        type: String,
        required: [true, 'Please enter your role']
    },
    resetPasswordToken: String,
    resetPasswordExpire:Date
})

// Encrypting password before saving user
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        next()
    }

    this.password = await bcrypt.hash(this.password, 10)
})


module.exports = mongoose.model('User', userSchema);