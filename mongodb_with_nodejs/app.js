// const express = require("express");
// const app = express();
// const port = 3000;
// const { MongoClient } = require("mongodb");
// const client = new MongoClient("mongodb://localhost:27017/");
// //giving server address

// let db;
// app.use(express.json());
// const connectDB = async () => {
//   await client.connect();
//   console.log("db connected");
//   db = client.db("node_db");
//   console.log("database created");
//   const collection = db.collection("demo");
//   console.log("collection created");

//   await collection.insertOne({ name: "ranjith", age: 34 });
//   console.log("data inserted");
// };

// connectDB();
// app.listen(port, () => {
//   console.log(`server is running on port ${port}`);
// });


//sending data into database via api postman


const express=require('express')
const app=express()
const port=3000
const {MongoClient}=require('mongodb')
const client=new MongoClient("mongodb://localhost:27017/")
app.use(express.json())
let db;
let collection;
const connectDB=async()=>{
    await client.connect();
     db=client.db("node_db");
    console.log("database connected")
    collection=db.collection('demo')
    console.log("collection created")

}

app.post("/add",async(req,res)=>{
    try{
        await collection.insertOne(req.body)
        res.send("data inserted")
    }catch(err){
        res.send('error')
    }
})
connectDB()


app.listen(port, () => {
        console.log(`server is running on port ${port}`);
    });
