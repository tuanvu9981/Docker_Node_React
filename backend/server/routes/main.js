const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();
router.post("/add-todo", todoController.createTodo);
router.get("/get-todos", todoController.getAll);


module.exports = router;