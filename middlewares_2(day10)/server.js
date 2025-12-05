// const express = require("express");
// const app = express();
// const port = 3000;
// const{ getProducts }=require("./controllers/apicontroller.js")
// const authRoutes=require("./Routes/authRoute.js")


// app.use(express.json())
// app.use("/api/v1/auth",authRoutes)
// app.get("/api/products",getProducts)

// app.listen(port, () => {
//   console.log(`server is running on port ${port}`);
// });

// const express=require("express")
// const port=3000
// const app=express()
// const authRoute=require("./Routes/authRoute.js")


// app.use(express.json())

// app.use("/api/v1/auth",authRoute)

// app.listen(port,()=>{
//   console.log(`server is running on port ${port}`)
// })

const express=require('express')
const app=express()
const port=3000
const {getProducts}=require('./controllers/apicontroller.js')
const finalData=require("./Routes/authRoute.js")

const getData=require("./Routes/productRoute.js")
app.use(express.json())
// app.get("/api/ranjith",getProducts)

app.use("/api/v1/auth",finalData)
app.use("/api/v1/products",getData)


app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})








