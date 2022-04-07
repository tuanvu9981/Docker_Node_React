const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const todoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;