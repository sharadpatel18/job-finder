const jwt = require("jsonwebtoken");

const Authentication = (req, res, next) => {

  const auth = req.headers['authorization'];
  
    if (!auth) {
      return res.status(403).json({
        message: "Unauthorized, JWT token is required",
        success: false,
      });
    }

    try {
      const decode = jwt.verify(auth, process.env.SECRETKEY);
      req.user = decode;
      next();
    } catch (error) {
      console.log(error);
      return res
        .status(401)
        .json({ message: "Unauthorized, invalid JWT token" });
    }
 
};

module.exports = { Authentication };