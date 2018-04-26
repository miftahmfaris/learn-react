import React, { Component } from "react";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav pills className="container horizontal-center">
            <NavItem active>
              <Link className="link" to="/">
                HOME
              </Link>
            </NavItem>
            <NavItem>
              <Link className="link" to="/todolist">
                Todo List
              </Link>
            </NavItem>

            <NavItem>
              <Link className="link" to="/about">
                About
              </Link>
            </NavItem>
          </Nav>
          <Route exact path="/" component={Home} />
          <Route path="/todolist" component={TodoList} />
        </div>
      </Router>
    );
  }
}

export default App;
