const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    category: {
        type: String, 
        required: [true, 'Please enter product category'],
        trim: true
    }
    
})

module.exports = mongoose.model('Category', categorySchema);