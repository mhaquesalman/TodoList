import React, { Component } from 'react';

class TodoAdd extends Component {

  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }

  // handle intput 
  handleSubmit = (e) => {
    e.preventDefault();
    // call function to add a todo
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }
render(){

return(

    <div>
    <form onSubmit={this.handleSubmit}>
      <label>Add a new todo:</label>
      <input type="text" onChange={this.handleChange} value={this.state.content} />
    </form>
  </div>
     )
}
}

export default TodoAdd;