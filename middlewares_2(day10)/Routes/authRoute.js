
// const express=require('express')
// const router=express.Router()
// const{loginController}=require("../controllers/authcontroller.js")


// router.post("/login",loginController)

// module.exports=router

const express=require('express')
const router=express.Router()
const {getData}=require("../controllers/authcontroller.js")


router.post("/login",getData)

module.exports=router