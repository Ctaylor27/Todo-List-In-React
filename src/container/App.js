import React, { Component } from 'react';
import Input from '../components/Input/Input';
import Todolist from '../components/TodoList/Todolist';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log('App.js Constructor')
    this.state = {
      todos : [
        { name: 'Do the dishes', description: 'They are gross', id: 0,},
        { name: 'Fold the laundry', description: 'They are going to get wrinkly', id: 1,},
        { name: 'Feed chester', description: 'He needs to eat', id: 2,},
      ]
    }
  }
  
  updateTodos = (name, description, id) => {
    let todos = [...this.state.todos];
    todos.push({name: name, description: description, id: id})
    this.setState({todos: todos});
  }

  deleteTodo = (id) => {
    console.log('click')
    let clone = [...this.state.todos];
    clone = clone.filter(todo => {
      if (todo.id !== id){
        return todo;
      } 
      return null;
    })
    this.setState({todos: clone})
    console.log(this.state.todos)
  }

  render() {
    return (
      <div className="App">
        <Input click={this.updateTodos}/>
        <Todolist data={this.state.todos} click={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
