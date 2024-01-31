const { default: mongoose } = require("mongoose")

const mongooseSchema = require("mongoose").Schema

const UserSchema = new mongooseSchema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cartItems: {
        type: Object
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("User", UserSchema)