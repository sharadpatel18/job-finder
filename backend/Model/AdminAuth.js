const mongoose = require('mongoose');

const AdminAuthSchema = new mongoose.Schema({
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
    },
    companyName:{
        type:String,
        required:[true , "company name is required"]
    },
    companyCapacity:{
        type:Number,
        required:[true, "capacity is required"],
        min:0
    },
    companyLocation:{
        type:String,
        required:[true , "location is required"]
    }
})

const Admin = mongoose.model('Admin' , AdminAuthSchema);
module.exports = Admin;  