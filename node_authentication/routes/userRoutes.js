const express = require("express");

const router = express.Router();
const {
  signupController,
  loginController,
  profileController,
  editProfile,
  getAllUsers,
 
} = require("../controllers/userControllers.js");

const{checkAuth,authorization}=require("../middlewares/authMiddlewares.js")
router.post("/signup", signupController);
router.post("/login", loginController);

//PROTECTED APIS OR AUTHENTICATED APIS

router.get("/profile",checkAuth,authorization("user"), profileController);
router.put("/editProfile",checkAuth,editProfile)

router.get("/getAllUsers",checkAuth,authorization("admin","manager"),getAllUsers)

module.exports = router;
