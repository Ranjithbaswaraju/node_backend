const { todoModel } = require("../models/todoSchema.js");
const addTodos = async (req, res) => {
  try {
    const data = new todoModel({
      title: req.body.title,
      designation: req.body.designation,
    });
    const finalData = await data.save();
    res.status(200).json({
      message: "Data added Succesfully",
      data: finalData,
    });
  } catch (err) {
    res.status(400).json({
      message: "Unable to add data",
    });
  }
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  const { title, designation } = req.body;

  try {
    const data = await todoModel.findByIdAndUpdate(
      id,
      {
        title: title,
        designation: designation,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Updated Succesfully",
      updatedData: data,
    });
  } catch (err) {
    res.json({
      message: "Unable to Update",
    });
  }
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await todoModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "Deleted Succesfully",
      DeletedData: data,
    });
  } catch (err) {
    res.status(400).json({
      message: "Unable to Delete",
    });
  }
};

const getSingleTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await todoModel.findById(id);
    res.status(200).json({
      message: "Succesfully got the Data",
      "Single Todo ": data,
    });
  } catch (err) {
    res.status(400).json({
      message: "Unable to get single Todo Data",
    });
  }
};
const getTodos = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await todoModel.find();
    res.status(200).json({
      message: "Total Data ",
      finalData: data,
    });
  } catch (err) {
    res.status(400).json({
      message: "Unable to Read the Data",
    });
  }
};

module.exports = { addTodos, updateTodo, deleteTodo, getSingleTodo, getTodos };
