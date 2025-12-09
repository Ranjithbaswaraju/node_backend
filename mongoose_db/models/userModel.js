const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number },
});

const users = mongoose.model("user", usersSchema);
module.exports = users;