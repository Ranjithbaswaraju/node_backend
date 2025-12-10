const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      uppercase: true,
      minlength: 2,
      trim: true,
    },
    designation: { type: String, required: true, lowercase: true },
  },
  { timestamps: true }
);

const todoModel = mongoose.model("todos", todosSchema);
module.exports = { todoModel };
