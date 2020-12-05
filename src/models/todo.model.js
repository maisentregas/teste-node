var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    responsible: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false,
        required: true
    }
})

var Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;