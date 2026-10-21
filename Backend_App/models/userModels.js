const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        require: [true, "Please enter name"]
    },

    email: {
        type: String,
        require: [true, "Please Enter email"],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email']
    },

    password: {
        type: String,
        require: [true, "Please enter password"],
        maxLength:[6, "Password cannot exceed 6 character"]
    },

    avatar: {
        type: String,
        require: true
    },

    role: {
        type: String,
        default: "user"
    },

    resetPasswordToken: String,

    resetPasswordTokenExpire: Date,

    createdAt: {
        type: Date,
        default: Date.now
    }
})

userSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password, 10)
})

module.exports = mongoose.model("user", userSchema)