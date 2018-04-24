import React, { Component } from "react";
import Output from "../small/Output";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      text: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleClick() {
    this.setState(prevState => ({
      todos: prevState.todos.concat(prevState.text),
      text: ""
    }));
  }

  deleteTodo(target_index) {
    this.setState(prevState => ({
      todos: prevState.todos.filter((todo, index) => index !== target_index)
    }));
  }

  editTodo(target_index) {
    const newTodos = Object.assign(this.state.todos);
    newTodos[target_index] = prompt("Update Your Task");

    this.setState(prevState => ({
      todos: newTodos
    }));
  }

  render() {
    return (
      <div className="container horizontal-center">
        <section>
          <h1 className="center" onDoubleClick={this.editTodo}>
            Listodo
          </h1>
          <input
            className="input-text"
            type="text"
            placeholder="Input Your Text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button className="input-button" onClick={this.handleClick}>
            Add
          </button>
          <Output
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
          />
        </section>
      </div>
    );
  }
}

export default TodoList;
