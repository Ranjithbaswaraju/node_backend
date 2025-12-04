const express = require("express");
const app = express();
const port = 3000;
const{ getProducts }=require("./controllers/apicontroller")

app.get("/api/products",getProducts)

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
