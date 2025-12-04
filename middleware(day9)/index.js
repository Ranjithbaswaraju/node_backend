const express=require('express');
const app=express()
const port=3000
app.use(express.json())
app.use(express.static('public'))
const fs=require('fs')

// application level middle wafre examples two
//logger very very important tracking the user actions like the ulr,method appled
app.use((req,res,next)=>{
    console.log(req.method,req.url)
    next()
})
//logger using middleware and sending the user actions like the ulr,method appled into int loger.txt file
app.use((req,res,next)=>{
    let data={
        method:req.method,
        pathname:req.url
    }
    fs.appendFileSync('./log.txt',JSON.stringify(data))
    next()
})
//built in middlle ware
app.post("/add",(req,res)=>{
    res.json(req.body)
})

//custom middle ware
app.use((req,res)=>{
    res.send("Api not found")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

