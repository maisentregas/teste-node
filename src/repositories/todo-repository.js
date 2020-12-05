var mongoose = require('mongoose');
var modelTodo = mongoose.model('Todo');

/**
 * Repository abstracts all operations to the controller.
 * If we need to change the behavior of any method, we do it all here.
 */

exports.list_todo = async () => {
    const res = await modelTodo.find({}, 'description responsible priority done _id');
    return res;
};

exports.create_todo = async data => {
    const todo = new modelTodo(data);
    await todo.save();
};

exports.delete_todo = async id => {
    await modelTodo.findByIdAndDelete(id);
};

exports.get_todo = async id => {
    const res = await modelTodo.findById(id, 'description responsible priority done _id');
    return res;
};

exports.update_todo = async (id) => {
    await modelTodo.findById(id, function(err, doc) {
        doc.done === true ? doc.done = false : doc.done = true;
        doc.save();
    });
};

exports.delete_todos = async () => {
    await modelTodo.deleteMany({});
};