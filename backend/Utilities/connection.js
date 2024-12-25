const mongoose = require('mongoose');
require("dotenv").config();

const Connection = mongoose.connect(process.env.DB_CONNECTION)
.then(()=>{
    console.log("database is connected");
})
.catch((err)=>{
    console.log("error: ",err);
})

module.exports = Connection;

