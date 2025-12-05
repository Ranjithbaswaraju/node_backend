const express=require('express')
const app=express()
const port=3000
const weatherData=require("./rotes/weatherRote.js")

app.use("/api/v1.0/weather",weatherData)

// for error handling middleware

app.use((err,req,res,next)=>{
    console.log('error middleware :',err.message)
    console.log('error middleware stack(pathnameaslo):',err.stack)
    res.status(429).json({
        message:"something went wrong"
    })
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})