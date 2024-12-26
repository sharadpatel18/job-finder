const mongoose = require("mongoose");

const createJobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  salary: {
    type: String,
    required: [true, "salary is required"],
  },
  timing: {
    type: String,
    required: [true, "Timing is required"],
  },
  jobType: {
    type: String,
    required: [true, "job type is required"],
  },
  experience: {
    type: Number,
    required: [true, "job experience is required"],
  },
  about:{
    type:String,
    required: [true, "about section is required"],
  },
  seats:{
    type:Number,
    required:[true , "seats is required"]
  },
  companyName:{
    type:String,
    required:[true , "company Name is required"]
  },
  companyLocation:{
    type:String,
    required:[true , "company Name is required"]
  },
  companyCapacity:{
    type:Number,
    required:[true , "company capacity is required"]
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    required:[true , "User id is required"]
  },
});

const CreateJob = mongoose.model('CreateJob' , createJobSchema);
module.exports = CreateJob;