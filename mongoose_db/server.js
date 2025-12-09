// const express = require("express");
// const app = express();
// const port = 3100;
// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost:27017/", { dbName: "demo_mongodb" })
//   .then(() => console.log("Database Connencted"))
//   .catch((err) => console.log(err));

//   //definig the schemas

//   const usersSchema=new mongoose.Schema({
//     name:{type:String,required:true},
//     password:{type:String,required:true},
//     phone:{type:Number}
//   })

//   const users=mongoose.model("user",usersSchema)

// //middle wares
// app.use(express.json());
// app.use(express.urlencoded());

// app.get("/", (req, res) => {
//   res.send("Hi hello there i am server");
// });

// app.post("/addUser",(req,res)=>{

//     const data=new users(req.body)
//     const finalData=data.save()
//     res.send(finalData)

// })

// app.listen(port, () => console.log("server started at port 3000"));

// const express = require("express");
// const app = express();
// const port = 3100;
// const mongoose = require("mongoose");
// const users = require("./models/userModel");
// app.use(express.json());


// mongoose
//   .connect("mongodb://localhost:27017/", { dbName: "demo_mongodb" })
//   .then(() => console.log("database connected"))
//   .catch((err) => console.log(err));

// const usersSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   password: { type: String, required: true },
//   phone: { type: Number },
// });

// const users =mongoose.model("user", usersSchema);

// app.post("/postData", async(req, res) => {
// //   const data = new users(req.body);
// const data=new users({
//     name:req.body.name,
//     password:req.body.password,
//     phone:req.body.phone
// })
//   const finalData = await data.save();
//   res.json({message:"data added successully","data":finalData});
// });

// app.listen(port, () => console.log(`server started at port ${port}`));





// CRUD OPERATIONS
// const express = require("express");
// const app = express();
// const port = 3100;
// const mongoose = require("mongoose");
// const users = require("./models/userModel");
// app.use(express.json());


// mongoose
//   .connect("mongodb://localhost:27017/", { dbName: "demo_mongodb" })
//   .then(() => console.log("database connected"))
//   .catch((err) => console.log(err));

// // const usersSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   password: { type: String, required: true },
// //   phone: { type: Number },
// // });

// // const users =mongoose.model("user", usersSchema);

// const todosSchema=new mongoose.Schema({
//     name:{type:String,required:true},
//     content:{type:String,required:true},
//     useId:{type:Number,required:true},
//     completed:{type:Boolean}
// })

// const todosModel=mongoose.model("todo",todosSchema)

// // async function todosData(){
// //     const data=new todosModel({
// //         name:"rajesh",
// //         content:"hello",
// //         useId:1,
// //         completed:false
// //     })
// //     await data.save()
// //     console.log("data added successully")
// // }
// // todosData()

// app.post("/addTodo",async(req,res)=>{
//     const todo=new todosModel({
//         name:"rajesh",
//         content:"new boy",
//         useId:3,

//     })
//     await todo.save()
//     res.json({message:"data added successully"})
// })

// app.get("/getTodos",async(req,res)=>{
//     const data=await todosModel.find()
//     res.json(data)
// })

// app.put("/updateTodo/:id",async(req,res)=>{
//     console.log(req.params.id)
//     // const data=await todosModel.findByIdAndUpdate(req.params.id,req.body,{new:true})

//     // or

//     // const data=await todosModel.updateOne({name:req.params.id},req.body,{new:true})
//     const data=await todosModel.updateMany({name:req.params.id},req.body,{new:true})

//     res.json(data)

// })

// app.delete("/deleteTodo/:id",async(req,res)=>{
//     // const data=await todosModel.findByIdAndDelete(req.params.id)
//     // const data=await todosModel.deleteOne({name:req.params.id})
//     const data=await todosModel.deleteMany({name:req.params.id})    
//     res.json(data)
// })







// app.post("/postData", async(req, res) => {
// //   const data = new users(req.body);
// const data=new users({
//     name:req.body.name,
//     password:req.body.password,
//     phone:req.body.phone
// })
//   const finalData = await data.save();
//   res.json({message:"data added successully","data":finalData});
// });

// app.listen(port, () => console.log(`server started at port ${port}`));



const express=require('express')
const app=express()
const port=3000
const mongoose=require('mongoose')
app.use(express.json())



mongoose.connect("mongodb://localhost:27017/",{dbName:"ranjith_mongo"})
.then(()=>console.log("database connected"))
.catch((err)=>console.log(err))

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    password:{type:String,required:true}
})

const users=mongoose.model("user",userSchema)


app.post("/addTodo",async(req,res)=>{
    const data=new users({
        name:req.body.name,
        age:req.body.age,
        password:req.body.password
    })
    const finalData=await data.save()
    res.json({
        message:'Data added Succesfully',
        "data":finalData
    })
})

app.get("/getTodo",async(req,res)=>{
const data=await users.find()
res.json(data)
})

app.put("/updateTodo/:id",async(req,res)=>{
    console.log(req.params.id)
    // const data=await users.findByIdAndUpdate(req.params.id,req.body,{new:true})
    // const data=await users.updateOne({name:req.params.id},req.body,{new:true})by name it will update and below code also
    const data=await users.updateMany({name:req.params.id},req.body,{new:true})
    res.json(data)
})


app.delete("/deleteTodo/:id",async(req,res)=>{
    // const data=await users.findByIdAndDelete(req.params.id)
    // const data=await users.deleteOne({name:req.params.id})//by name it will delete and below code also
    const data=await users.deleteMany({name:req.params.id})
    res.json(data)
})




app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})