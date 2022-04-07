const mongoose = require('mongoose');
const Todo = require('../models/todo');

function createTodo(req, res) {
    const todo = new Todo({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        priority: req.body.priority
    });

    return todo
        .save()
        .then((newTodo) => {
            return res.status(200).json({
                status: "OK",
                todo: newTodo,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                status: "ERR",
                error: error.message,
            })
        });
}

function getAll(req, res) {
    Todo.find()
        .select("_id name priority")
        .then((all_todo) => {
            return res.status(200).json({
                "status": "OK",
                "todos": all_todo
            });
        })
        .catch((err) => {
            res.status(500).json({
                "status": "ERR",
                "error": err.message
            })
        });
}

module.exports = { createTodo, getAll };
