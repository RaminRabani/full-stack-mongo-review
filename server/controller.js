const db = require('../database/');
const helpers = require('../database/mongoDBHelpers.js');

controller = {
  get: (req,res) => {
    console.log('In get')
  
    helpers.getAllTodosHelper()
      .then((todos) => {
        res.status(200).send(todos);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },
  post: (req,res) => {
    console.log('In post')

    const {todo, listName} = req.body;  ////STUDY THIS LINE, must be the same as what you called it in the helper function

    helpers.createTodoHelper(todo, listName)
      .then(() => {
        res.status(201).send('Success creating todo!');
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },
  patch: (req,res) => {
    console.log('In patch')

    const {id, newTodo} = req.body; ////STUDY THIS

    helpers.updateTodoHelper(id, newTodo)
      .then(() => {
        res.status(201).send('Success updating todo!');
      })
      .catch(err => {
        res.status(404).send(err);
      })
  }
}

module.exports = controller;


//patch will only update a specific portion of the empty; put will update the whole entry