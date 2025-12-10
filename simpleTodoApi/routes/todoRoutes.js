const express = require("express");
const {
  addTodos,
  updateTodo,
  deleteTodo,
  getSingleTodo,
  getTodos,
} = require("../controllers/todoController");
const router = express.Router();

router.get("/getData", getTodos);
router.post("/addData", addTodos);
router.put("/updateData/:id", updateTodo);
router.get("/getSingleData/:id", getSingleTodo);
router.delete("/deleteData/:id", deleteTodo);

module.exports = router;
