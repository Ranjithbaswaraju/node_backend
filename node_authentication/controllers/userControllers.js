const bcryptjs = require("bcryptjs");
const { UserModel } = require("../models/usersModel.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const signupController = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 12);
    const userData = new UserModel({
      userName: name,
      password: hashedPassword,
      email: email,
      bio: req.body.bio || "",
      
    });

    // const data=await userData.save()
    // return res.json({
    //     message:"added",
    //     user:data
    // })

    //HIDING THE PASSWORD FROM USER
    const data = await userData.save();
    return res.json({
      message: "User Signup Succesfully",
      user: { userName: data.userName, bio: data.bio, email: data.email },
    });
  } catch (error) {
    res.json({ err_message: error.message });
  }
};

// const loginController = async (req, res) => {
//   try{
//     const{email,password}=req.body
//     const data=await UserModel.findOne({email:email})
//     console.log(data)
//     if(data){
//         // res.json(user)
//         const passwordCheck= bcryptjs.compare(password,data.password)

//         if(passwordCheck){
//             res.json({
//                 message:"Login Succesfullll",
//                 userInfo:{
//                     userName:data.userName,
//                     email:data.email,
//                     bio:data.bio
//                 }
//             })
//         }
//         else{
//             res.status(429).send("User info found False")
//         }
//     }
//     else{
//         res.send("Invalid username or password")
//     }
//   }
//   catch(err){ }

// }

//newCode

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await UserModel.findOne({ email: email });

    if (data) {
      const passwordCheck = bcryptjs.compareSync(password, data.password);

      if (passwordCheck) {
        const token = jwt.sign(
          { userName: data.userName },
          process.env.jwt_secret_key,
          {expiresIn:"12h"}
        );

        res.status(200).json({
          message: "Login Succesfully",
          userInfo: {
            userName: data.userName,
            email: data.email,
            bio: data.bio,
            role:data.role
          },
          access_token: token,
        });
      } else {
        res.send("Invalid username or password");
      }
    } else {
      res.send("Invalid username or password");
    }
  } catch (err) {
    console.log(err);
  }
};

const profileController = async (req, res) => {
  try {
    const userProfile = await UserModel.findById(req.userid).select(
     [ "-password",
      "-__v",
      "-createdAt",
      "-updatedAt"
    ]);
    res.json(userProfile);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};


const getAllUsers=async(req,res)=>{
  try{
    const userData=await UserModel.find()
    res.json(userData)
  }
  catch(error){
    console.log(error)
    res.status.send("something wrong")
  }
}

const editProfile = (req, res) => {
  return res.send("this edit profile");
};
module.exports = {
  signupController,
  loginController,
  profileController,
  editProfile,
  getAllUsers
};
