const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/", {
      dbName: "MVC_Todo",
    });
    console.log("Database Connected");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connectDB };
