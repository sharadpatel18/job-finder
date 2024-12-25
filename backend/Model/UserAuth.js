const mongoose = require('mongoose');

const UserAuthSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , "name is required"]
    },
    email:{
        type:String,
        required:[true, "email is required"],
        unique:true,
        match:[/^\S+@\S+\.\S+$/, 'Email is invalid']
    },
    password:{
        type:String,
        required:[true , "password is required"]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

const User = mongoose.model('User' , UserAuthSchema);
module.exports = User;  