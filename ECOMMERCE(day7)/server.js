// // const http=require('http')
// // const port=3000
// // const {readFile}=require("./products/products.js")
// // const url=require('url')
// // const path = require('path')
// // const server=http.createServer((req,res)=>{
// //     let parsedUrl=url.parse(req.url)
// //     let pathname=parsedUrl.pathname
// //     let method=req.method

// //     //getting ids from the url for getting single id
// //     const path=pathname.split("/")
// //     const id=path[2]
// //     console.log(id)

// //     //Get all Products
// //     if(pathname==='/products' && method==='GET'){
// //         const data=readFile()
// //         res.writeHead(200,{'Content-Type':'application/json'})
// //         res.write(JSON.stringify(data))
// //        return res.end()

// //     }
// //     //getting single product using the id
// //     else if(method==='GET' && pathname===`/products/${id}`){
// //         const data=readFile()
// //         const product=data.find((item)=>item.id==id)
// //         if(product){
// //             res.writeHead(200,{'Content-Type':'application/json'})
// //             res.write(JSON.stringify(product))
// //             return res.end()
// //         }
// //         else{
// //             res.writeHead(404,{'Content-Type':'text/html'})
// //             res.write('product not found')
// //             return res.end()
// //         }

// //     }
// //     else if(method=='POST' && pathname=='/postProducts'){
// //         res.write("Post products")
// //         return res.end()
// //     }

// //     res.write('I am a server')
// //     res.end()
// // })
// // server.listen(port,()=>{
// //     console.log(`server is running on port ${port}`)
// // })

// const http = require("http");
// const port = 3001;
// let url = require("url");
// const { v4, validate } = require("uuid");
// console.log(v4());
// const { writeFile, readFile } = require("./products/products.js");

// const server = http.createServer((req, res) => {
//   let parsedUrl = url.parse(req.url);
//   console.log(parsedUrl);
//   let pathname = parsedUrl.pathname;
//   let method = req.method;

//   //getting the unique id
//   const path = pathname.split("/");
//   const id = path[2];
//   console.log(id);
//   // console.log(path)
//   if (pathname === "/allProducts" && method === "GET") {
//     let data = readFile();
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(JSON.stringify(data));
//     return res.end();
//   } else if (method == "GET" && pathname == `/allProducts/${id}`) {
//     let data = readFile();
//     const product = data.find((item) => item.id == id);
//     if (product) {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.write(JSON.stringify(product));
//       return res.end();
//     } else {
//       res.write("product not found");
//       return res.end();
//     }
//   }
//   else if (method == "POST" && pathname == "/postProducts") {
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk;
//     });

//     req.on("end", () => {
//       //from this posting into the data.json file
//       const data = readFile();
//       const inputData = JSON.parse(body);
//       inputData.id = v4();
//       console.log(inputData);
//       data.push(inputData);
//       console.log(data);
//       writeFile(data); //is to add the data into file

//       const message = {
//         message: "product add succesfully",
//         product: inputData,
//       };

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.write(JSON.stringify(message));
//        res.end();
//     });
//   return
//   }

//   else if(method==='PUT' && pathname===`/updateProducts/${id}`){
//     const data=readFile()
//     const checkProduct=data.find((item)=>item.id==id)
//     console.log(checkProduct)

//     if(checkProduct){
//       console.log("existtt")
//       let body=''
//       req.on("data",(c)=>{
//         body+=c
//         // console.log(body)

//       })
//       req.on("end",()=>{
//         const updateData=JSON.parse(body)
//         data.forEach((item)=>{
//             if(item.id==id){
//                 item.name=updateData.name
//                 item.category=updateData.category
//                 item.price=updateData.price
//             }
//         })
//         writeFile(data)
//         res.write("product updated successfully")
//         res.end()
//       })

//     }
//     else{
//       res.write("product not found")
//       res.end()
//     }
//     return;
//   }
//   else if (method==='DELETE' && pathname===`/deleteProduct/${id}`){
//     const data=readFile()
//     const check=data.some((item)=>item.id==id)
//     console.log(check,"checking......")

//     if(check){
//        const newData=data.filter((item)=>item.id!=id)
//        console.log(newData)
//        writeFile(newData)
//        res.write("product deleted successfully")
//        res.end();
//     }
//     else{
//       res.write("product not found")
//       res.end()
//     }

//     // res.write("product deleted successfully")
//     // res.end();
//     return;
//   }

//   res.write("I am a server");
//   res.end();
// });
// server.listen(port, () => {
//   console.log(`server is running on port ${port}`);
// });

const http = require("http");
const port = 3000;
const url = require("url");
const { readFile, writeFile } = require("./products/products.js");
const { v4 } = require("uuid");
const { json } = require("stream/consumers");

const server = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url);

  let pathName = parsedUrl.pathname;
  let method = req.method;
  let path = pathName.split("/");
  let id = path[2];
  console.log(id);
  if (pathName === "/allProducts" && method === "GET") {
    let data = readFile();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    console.log(JSON.stringify(data));
    return res.end();
  } else if (pathName === `/allProducts/${id}` && method === "GET") {
    let data = readFile();
    let product = data.find((item) => item.id == id);
    if (product) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(data));
      console.log(JSON.stringify(data));
      res.end();
    } else {
      res.writeHead(404, { "content-type": "application/json" });
      res.write("Product Not Found");
      console.log("Product Not Found");
      res.end();
    }
    return;
  } else if (method == "POST" && pathName === "/addProducts") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const data = readFile();
      const inputData = JSON.parse(body);
      const product = data.filter((item) => item.name == inputData.name);
      if (product.length > 0) {
        res.writeHead(400, { "content-type": "application/json" });
        res.write("Product already exist");
        res.end();
        return;
      } else {
        inputData.id = v4();
        data.push(inputData);
        console.log(data);
        writeFile(data);
        const message = {
          message: "product added successfully",
          product: inputData,
        };
        res.write(JSON.stringify(message));

        res.end();
      }
    });
    return;
  } 
  else if (method === "PUT" && pathName == `/updateProduct/${id}`) {
    let data = readFile();
    let product = data.find((item) => item.id == id);
    console.log(product);

    if (product) {
      let body = "";
      req.on("data", (c) => {
        body += c;
      });
      req.on("end", () => {
        const updateData = JSON.parse(body);
        data.forEach((item) => {
          if (item.id == id) {
            item.name = updateData.name;
            item.category = updateData.category;
            item.price = updateData.price;
          }
        });
        writeFile(data);
        res.write("product updated successfully");
        res.end();
      });
    }
  }
  else if(method=='GET' && pathName==`/deleteProduct/${id}`){
    
  }
  res.write("I am a server");
  res.end();
});
server.listen(port, () => {
  console.log("server is running on port", port);
});
