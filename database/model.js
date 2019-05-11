const mongoose = require('mongoose');
// const db = require('./index.js'); //Dont think we need this line

const listSchema = new mongoose.Schema({
  todo: {type: String, required: true},
  listName: {type: String, required: true}
})

const TodoList = mongoose.model('todolists', listSchema);

module.exports.TodoList = TodoList;

//collections - database
//models - table
//documents - entry