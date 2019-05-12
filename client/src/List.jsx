import React from 'react';
import axios from 'axios';
import ListEntry from './ListEntry.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      newTodo: '',
      listName: 'Todos',
      todos: []
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  componentDidMount() {
    this.getTodos();
  }
  
  getTodos() {
    axios.get('/api/todoList')
      .then( ({data}) => {
        this.setState({
          todos: data
        }, () => console.log(this.state.todos))
      })
      .catch(err => console.log(err))
  }

  handleInput(e) {
    this.setState({
      todo: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { todo, listName } = this.state;

    axios.post('/api/todoList', {todo, listName})
      .then(() => this.getTodos())
      .catch(err => console.log(err))

    document.getElementById('form').reset();
  }

  handleNewTodo(e) {
    this.setState({
      newTodo: e.target.value
    })
  }

  editTodo(id) {
    const {newTodo} = this.state;

    axios.patch('/api/todoList', {id, newTodo })
      .then(()=> this.getTodos())
      .catch(err => console.log(err))

      document.getElementById('editForm').reset();
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <form id="form" onSubmit={this.handleSubmit}>
          Enter new todo:<input type="text" name="todo" onKeyUp={this.handleInput} />
          <input type="submit" value="Submit" />
        </form><br></br>
        {this.state.todos.map((todo, index) => {
          return (
            <ListEntry
            key={index}
            todo={todo.todo}
            handleNewTodo={this.handleNewTodo}
            editTodo={this.editTodo}
            id={todo._id}
          />)
        })}
      </div>
    )
  }
}

export default List;