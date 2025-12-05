const express=require('express');
const router=express.Router();
const {getWeatherData}=require("../controllers/weatherController.js")
const {api_keyData}=require("../middleWares/weatherMiddleware.js")

//for error handling
const {cities,addCities}=require("../controllers/cityControllerserr.js")
// const{addCites}=require('../controllers/cityControllerserr.js')
router.get("/",api_keyData,getWeatherData)
router.get("/cities",cities)
router.post("/addCity",addCities)


module.exports=router