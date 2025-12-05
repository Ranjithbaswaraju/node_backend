const express=require('express')
const router=express.Router()
const {getProducts}=require("../controllers/productController.js")

router.get("/getProducts",getProducts)

module.exports=router
