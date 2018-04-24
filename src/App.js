import React, { Component } from "react";
import Home from "./pages/Home"
import TodoList from "./pages/TodoList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todolist">Todo List</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/todolist" component={TodoList} />
        </div>
      </Router>
    );
  }
}

export default App;
