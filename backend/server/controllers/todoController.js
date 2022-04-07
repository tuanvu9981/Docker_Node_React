const mongoose = require('mongoose');
const Todo = require('../models/todo');

// CREATE
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
                "status": "OK",
                "todo": newTodo,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                "status": "ERR",
                "error": error.message,
            })
        });
}

// READ (get All) --> GET + DELETE: NO BODY REQUEST
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

// READ (get One) --> GET + DELETE: NO BODY REQUEST
function getOneWithID(req, res) {
    const id = req.params.todoId;
    Todo.findById(id)
        .then((singleTodo) => {
            res.status(200).json({
                "status": "OK",
                "todo": singleTodo
            })
        })
        .catch((err) => {
            res.status(500).json({
                "status": "ERR",
                "error": err.message
            })
        });
}

// UPDATE 
function updateTodo(req, res) {
    const id = req.params.todoId;
    const updateObj = req.body;
    Todo.updateOne({ _id: id }, { $set: updateObj })
        .exec()
        .then(() => {
            res.status(200).json({
                "status": "OK",
                "updatedTodo": updateObj
            })
        })
        .catch((err) => {
            res.status(500).json({
                "status": "ERR",
                "error": err.message
            })
        });
}

// DELETE
function deleteTodo(req, res) {
    const id = req.params.todoId;
    Todo.findByIdAndRemove(id)
        .exec()
        .then(() => res.status(200).json({
            "status": "DEL_OK",
        }))
        .catch((err) => res.status(500).json({
            "status": "DEL_ERR",
            "error": err.message
        }))
}

module.exports = { createTodo, getAll, getOneWithID, updateTodo, deleteTodo };
