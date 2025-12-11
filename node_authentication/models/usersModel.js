const mongoose=require('mongoose')


const usersSchema=new mongoose.Schema({
    userName:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    bio:{type:String},
    email:{type:String,required:true,unique:true},
    role:{type:String,default:"user",required:true}
},{timestamps:true})


const UserModel=mongoose.model("users",usersSchema)

module.exports={UserModel}