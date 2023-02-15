const Todo = require('../models/todoSchema')

exports.get_todos  = async () => {
    return await Todo.find();
}

exports.delete_todo  = async (id) => {
    return await Todo.findByIdAndDelete(id);
}

exports.add_todo  = async (body) => {
   const todo = new Todo(body);
   return await Todo.create(todo); 
}

exports.get_todo  = async (id) => {
     return await Todo.findOne({ _id: id });
}

exports.edit_todo = async (id,body) => {
  return await Todo.findByIdAndUpdate(id, body);
}