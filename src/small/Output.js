import React from "react";
import axios from "axios";

// const NAME = process.env.REACT_APP_NAME;
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

class Output extends React.Component {
  state = {
    data: []
  };

  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
  }

  getData() {
    axios.get(`${API_URL}/todo`).then(res => {
      this.setState({ data: res.data });
    });
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <div className="output">
        {this.props.todos.map((todo, index) => (
          <div className="list-todo" key={index}>
            <div
              className="display-inline"
              onDoubleClick={() => {
                this.props.state.editTodo(index);
              }}
            >
              {todo}
            </div>
            <span
              className="float-right"
              onClick={() => {
                this.props.deleteTodo(index);
              }}
            >
              X
            </span>
          </div>
        ))}
        {this.state.data.map((todo, index) => (
          <div className="list-todo" key={index}>
            <div
              className="display-inline"
              onDoubleClick={() => {
                this.props.state.editTodo(index);
              }}
            >
              {todo.text}
            </div>
            <span
              className="float-right"
              onClick={() => {
                this.props.deleteTodo(index);
              }}
            >
              X
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Output;
