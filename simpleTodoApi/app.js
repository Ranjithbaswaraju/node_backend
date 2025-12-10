const express = require("express");
const app = express();
const allData = require("./routes/todoRoutes.js");
const { connectDB } = require("./db_configure/db.js");

connectDB();
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/todos", allData);

app.listen(3000, () => console.log("server started at :3000"));
