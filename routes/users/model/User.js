//first, last, email, password, username
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email:{
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    username: {
        type: String,
        unique: true
    },
    todos: {
        type:[mongoose.Schema.ObjectId],
        ref: "todo",
        default: []
    }
    //re-write a route 
})

module.exports = mongoose.model('user', userSchema)