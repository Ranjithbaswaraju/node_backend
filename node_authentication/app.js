const express=require('express')
const app=express()
// const port=3000
const dotenv=require('dotenv')
dotenv.config()
const connectDB=require("./db_config/db.js")
const userRoutes=require("./routes/userRoutes.js")
const jwt=require("jsonwebtoken")
// const user={
//     username:"ranjith",
    
// }

// const token=jwt.sign(user,"ndksjkkjdafknkjnkjsad")
// console.log(token)
//middlewares

app.use(express.json())
app.use(express.urlencoded())

app.get("/",(req,res)=>{
    res.send("hi I am server")
})
app.use("/auth/",userRoutes)





connectDB();





app.listen(process.env.port || 3000,()=>{
    console.log("application started"+process.env.port)
})