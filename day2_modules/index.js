// function hello(){
//     console.log("Hello world")
// }
// module.exports = (hello())

// let {add,sub}=require('./file.js')
// console.log(add(2,3))
// console.log(sub(2,1))

// let {data}=require('./file.js')
// console.log(data())

// import a from './file.js'
// console.log(a)

// const http=require('http');
// http.createServer((req,res)=>{
//     res.write("Hello World111")
//     res.end()
// }).listen(3000,()=>{
//     console.log("Server Started")
// })


// const http=require('http');
// const port=3200
// const axios=require('axios')

// const server=http.createServer((req,res)=>{
//     axios.get('https://fakestoreapi.com/products')
//     .then((response)=>{
//         res.write(JSON.stringify(response.data))//console.log(response.data)
//         res.end()
//     })
// })

// server.listen(port,()=>{
//     console.log('server started')
// })

const http=require('http');
const port=3000
const axios=require('axios')
const server=http.createServer((req,res)=>{
    axios.get("https://fakestoreapi.com/products")
    .then(response=>{
        res.write(JSON.stringify(response.data))
        res.end()
    })
})
server.listen(port,()=>{
    console.log('server started')
})

