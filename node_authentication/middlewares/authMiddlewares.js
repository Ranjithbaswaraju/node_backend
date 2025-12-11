const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { UserModel } = require("../models/usersModel.js");
const checkAuth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("not token present");
  } else {
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token)
    try {
      const decode = jwt.verify(token, process.env.jwt_secret_key);
      const data = await UserModel.findOne({
        userName: decode.userName,
      }).select(["_id","role"]);
      //   console.log(data)

      if (data) {
        console.log(req.userid);
        req.userid = data;
        console.log(req.userid);
        next();
      } else {
        return res.status(402).json({
          message: "no user found",
        });
      }
    } catch (error) {
      if (
        error.message === "jwt expired" ||
        error.message === "invalid token"
      ) {
        return res
          .status(401)
          .json({ message: "invalid token or token expired" });
      } else {
        return res.status(400).json({ message: "something went wrong" });
      }
    }
  }
};

const authorization = (...roles) => {
  return (req, res, next) => {
    if(req.userid.role){
      const userRoleId=req.userid.role
      if(roles.includes(userRoleId)){
        next()
      }
      else{
        return res.status(403).json({message:"Invalid Access"})
      }
    }
    else{
      return res.status(403).json({message:"Invalid Access"})
    }
  };
};

module.exports = { checkAuth, authorization };
