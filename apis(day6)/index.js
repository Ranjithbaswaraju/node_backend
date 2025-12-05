const http=require('http');
const port=3000

const server=http.createServer((req,res)=>{
    console.log("url",req.url,"method",req.method)
    res.write('hello world')
    res.end()
})
server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})



//Creating a apis

// const http = require("http");
// const port = 3001;
// const url = require("url");

// const server = http.createServer((req, res) => {
//   console.log("url", req.url, "method", req.method);
//   const parsedUrl = url.parse(req.url);
//   //pathname will conme form the url module
//   if (parsedUrl.pathname === "/products" && req.method === "GET") {
//     res.writeHead(200, { "content-type": "application/json" });
//     res.write("Products Data");
//     res.end();
//   } else if (req.method === "POST" && parsedUrl.pathname === "/addproducts") {
//     res.writeHead(201, { "content-type": "application/json" });
//     res.write("Post added");
//     res.end();
//   } else if (req.method === "PUT" && parsedUrl.pathname === "/updateProduct") {
//     res.writeHead(200, { "content-type": "application/json" });
//     res.write("Product updated");
//     res.end();
//   } else if (req.method === "PATCH" && parsedUrl.pathname === "/updateCart") {
//     res.writeHead(200, { "content-type": "application/json" });
//     res.write("Cart updated");
//     res.end();
//   } else if (
//     req.method === "GET" &&
//     parsedUrl.url === "/api/allproducts"
//   ) {
//     const products = [
//       {
//         id: 0,
//         title: "string",
//         price: 0.1,
//         description: "string",
//         category: "string",
//         image: "http://example.com",
//       },
//     ];
//     res.write(JSON.stringify(products));
//     res.end();
//   }  
//   else if (
//     req.method === "DELETE" &&
//     parsedUrl.pathname === "/deleteProduct"
//   ) {
//     res.writeHead(200, { "content-type": "application/json" });
//     res.write("Product deleted");
//     res.end();
//   }else {
//     res.writeHead(404, { "content-type": "application/json" });
//     res.write("Not Found");
//     res.end();
//   }
// });

// server.listen(port, () => {
//   console.log(`server is running on port ${port}`);
// });
