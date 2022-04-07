const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();
router.post("/add-todo", todoController.createTodo);
router.get("/get-todos", todoController.getAll);
router.get("/todo/:todoId", todoController.getOneWithID);
router.put("/todo/:todoId", todoController.updateTodo);
router.delete("/todo/:todoId", todoController.deleteTodo);


module.exports = router;