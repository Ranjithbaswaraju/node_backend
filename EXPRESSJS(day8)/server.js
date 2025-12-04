// const express=require('express')

// const app=express()

// // creation of server using express
// app.listen(3000,()=>{
//     console.log("I am listening")
// })

// //all methods of express
// app.get("/",(req,res)=>{
//     res.send("i am get method")
// })


// app.post("/",(req,res)=>{
//     // res.send("i am post method")
//     // (or)
//     res.json({method:"POST",apiname:"/"})
// })

// app.put("/",(req,res)=>{
//     res.send("i am put method")
// })

// app.patch("/",(req,res)=>{
//     res.status(201).json({
//         method:"PATCH",
//         apiname:"/"
//     })
//     // res.status(200).send("i am patch method")
// })

// app.delete("/",(req,res)=>{
//     res.status(404).send("i am delete method")
// })


//path params refer below


// const express=require('express')
// const app=express()
// const port=3000

// app.get("/books/:id",(req,res)=>{
//     console.log(req.params)
//     const params=req.params
//     console.log(params.id)
//     res.send('Hello world'+params.id)
// })

// app.listen(port,()=>{
//     console.log(`listening on port ${port}`)
// })


// path param only but nested params

// const express=require('express')
// const port=3000
// const app=express()

// app.get("/books/:id/:name",(req,res)=>{
//     console.log(req.params)
//     res.json(req.params)
    

//     //to get the single paramters like id and name no need just i wrote to practice
//     // res.json(req.params.id)
//     // res.json(req.params.name)
//     // console.log(req.params.id)

// })

// app.listen(port,()=>{
//     console.log(`listening on port ${port}`)
// })


//QUERY PARAMETERS

// const express=require('express')
// const port=3000
// const app=express()

// app.get("/books",(req,res)=>{
//     console.log(req.query)
//     res.json({
//         message:"i am query paramet example",
//         name:req.query.name,
//         price:req.query.price
//     })
// })

// app.listen(port,()=>{
//     console.log(`listening on port ${port}`)
// })

//USING THE QUERY PARAMS IN PATH PARAMS

// const express=require('express')
// const port=3000
// const app=express()

// app.get("/books/:id/:name",(req,res)=>{
//     console.log(req.query)
//     res.json(req.params)
// })

// app.listen(port,()=>{
//     console.log(`listening on port ${port}`)
// })

//Getting data from the body

const express=require('express')
const port=3000
const app=express()
app.use(express.json())
app.use(express.urlencoded())//form data


app.post('/books',(req,res)=>{
    console.log(req.body)
    res.json({message:'I am post method',
        data:req.body,
        params:req.query.price
    })
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})