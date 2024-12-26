const jwt = require("jsonwebtoken");
const User = require("../Model/UserAuth");
const bcrypt = require("bcrypt");
const Admin = require("../Model/AdminAuth");
require("dotenv").config();

const Signup = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      isAdmin,
      companyName,
      companyCapacity,
      companyLocation,
    } = req.body;
    const existedUser = await User.findOne({ email: email });
    const existedAdmin = await Admin.findOne({ email: email });

    if (existedUser || existedAdmin) {
      return res.status(401).json({
        data: {
          message: "user is existed, go to the login page!!",
          success: false,
        },
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    if (isAdmin == true) {
      const createAdmin = await Admin.create({
        name,
        email,
        password:hashPassword,
        isAdmin,
        companyName,
        companyCapacity,
        companyLocation,
      });
    } else {
      const createUser = await User.create({
        name,
        email,
        password:hashPassword,
        isAdmin,
      });
    }

    return res.status(201).json({ message: "user is created", success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(501)
      .json({ message: "internal server error", success: false });
  }
};

const Login = async (req, res) => {
  try {

    const { email, password } = req.body;
    let existedUser = await User.findOne({ email: email });
    
    if (!existedUser) {
      existedUser = await Admin.findOne({ email:email })
    }

    if (!existedUser) {
      return res.status(401).json({
        data: {
          message: "user is not existed, go to the signup page!!",
          success: false,
        },
      });
    }

    const Token = jwt.sign(
      {
        id: existedUser._id,
        email: existedUser.email,
      },
      process.env.SECRETKEY,
      { expiresIn: '24h' }
    );
    
    return res
      .status(201)
      .json({
        message: "login successfully",
        Token,
        name: existedUser.name,
        email: existedUser.email,
        id:existedUser._id,
        isAdmin:existedUser.isAdmin,
        
        success: true,
      });
  } catch (error) {
    console.log(error);
    return res
      .status(501)
      .json({ message: "internal server error", success: false });
  }
};

module.exports = { Signup, Login };
