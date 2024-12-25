const mongoose = require("mongoose");

const aiChatSchema = new mongoose.Schema({
    prompt:{
        type:String,
        required:[ true , "Prompt is Required!" ]
    },
    responce:{
        type:String,
        required:[ true , "responce is Required!" ]   
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true , "User ID is required"]
    }
}, { timestamps: true });


const AiChat = mongoose.model('AiChat' , aiChatSchema);
module.exports = AiChat;