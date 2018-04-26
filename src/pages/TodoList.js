import React, { Component } from "react";
import Output from "../small/Output";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

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

  async handleClick() {
    try {
      if (this.state.text === "") {
        alert("Input Cannot be Empty");
      } else {
        var text = Object.assign(this.state.text)
        await axios
          .post(`${API_URL}/todo`, { text: text })
          .then(res => res);
        await this.setState({todos: this.state.todos.concat(text)});
      }
    } catch (e) {
      return e;
    }
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
      <div>
        <div className="container horizontal-center">
          <section>
            <h1 className="center">Listodo</h1>
            <InputGroup className="margin-bottom-10">
              <Input
                type="text"
                placeholder="Input Your Text"
                onChange={this.handleChange}
                value={this.state.text}
              />
              <InputGroupAddon addonType="append">
                <Button color="secondary" onClick={this.handleClick}>
                  Add
                </Button>
              </InputGroupAddon>
            </InputGroup>
            <Output
              todos={this.state.todos}
              deleteTodo={this.deleteTodo}
              editTodo={this.editTodo}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default TodoList;
