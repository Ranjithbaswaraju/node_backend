const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

async function connectDB() {
  try {
    await mongoose.connect(process.env.mongoose_uri, {
      dbName: process.env.mongoose_dbName,
    });
    console.log("db connected succesfully" + process.env.mongoose_dbName);
  } catch (err) {
    console.log(err);
  }
  
}

module.exports = connectDB;
