const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();
router.post("/todo/add", todoController.createTodo);
router.get("/todo/getAll", todoController.getAll);
router.get("/todo/:todoId", todoController.getOneWithID);
router.put("/todo/:todoId", todoController.updateTodo);
router.delete("/todo/:todoId", todoController.deleteTodo);


module.exports = router;