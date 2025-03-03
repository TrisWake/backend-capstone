const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({ //How mongo processes data
    //Information that mongo is holding (needs to be a product name thats a string, number, etc)
    productName: {
        type: String,
        unique: true
    },
})

module.exports = mongoose.model('product', productSchema) //Runs 