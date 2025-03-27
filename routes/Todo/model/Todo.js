//name 
//isDOne
const {mongoose} = require("mongoose")
const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    isDone: {
        type: Boolean,
        default: false
    },
    userID: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true
    }
})

module.exports = mongoose.model('todo', todoSchema)