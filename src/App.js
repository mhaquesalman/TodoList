import React, { Component } from 'react';
import TodoAdd from './component/TodoAdd';
import Todos from './component/TodoList';

class App extends Component {

  state = {
     todos: [
        {id: 1, content: 'buy some milk'},
        {id: 2, content: 'play mario kart'}
      ]
  
  }
  
  
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  }
  
  
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }


  render() {
    return (
      <div className="App container">
      <h2 className="center blue-text"> Todo... </h2>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <TodoAdd addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
