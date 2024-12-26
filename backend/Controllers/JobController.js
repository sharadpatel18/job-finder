const CreateJob = require("../Model/Jobmodel")

const createJob = async (req,res) => {
    try {
        const createJobInDatabase = await CreateJob.create(req.body);
        return res.status(200)
                    .json({message:"job is created successfully" , success:true})
    } catch (error) {
        console.log(error);
        return res.status(501)
                    .json({message:"internal server error" , success:false})
    }
}

module.exports = { createJob }