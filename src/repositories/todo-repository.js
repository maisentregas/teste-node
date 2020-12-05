const mongoose = require('mongoose');
const modelTodo = mongoose.model('Todo');

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

exports.update_todo = async (id, data) => {
    await modelTodo.findByIdAndUpdate(id, {
        $set: data
    });
};

exports.delete_todos = async () => {
    await modelTodo.deleteMany({});
};