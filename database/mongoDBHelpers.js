const { TodoList } = require('./model.js') 
// You dont need to deconstruct here, but if you dont you would have to use TodoList.TodoList.find... below

const getAllTodosHelper = () => {
  return TodoList.find({});
}

const createTodoHelper = (todo, listName) => {
  return TodoList.create({ todo, listName});
}

//This is saying find the item with _id === id, and update that item to the second object passed in
const updateTodoHelper = (id, newTodo) => {
  return TodoList.findOneAndUpdate({_id: id}, {todo: newTodo});
}

module.exports = {
  getAllTodosHelper,
  createTodoHelper,
  updateTodoHelper
}