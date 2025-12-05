const getWeatherData=(req,res)=>{
    const{city}=req.query
    res.status(200).json({
        message:"data fetched succesfully",
        city:city,
        temperature:30,
        temperature_type:'celsius'
    })
}

module.exports={getWeatherData}