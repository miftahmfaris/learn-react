import React from "react";

function Output(props) {
  return (
    <div className="output">
      {props.todos.map((todo, index) => (
        <div className="list-todo" key={index}>
          <div className="display-inline"
            onDoubleClick={() => {
              props.editTodo(index);
              console.log(index);
              // console.log(props.todos);
              // console.log(props.todos[index]);
              // console.log(props.todos);
            }}
          >
            {todo}
          </div>
          <span className="float-right"
            onClick={() => {
              props.deleteTodo(index);
            }}
          >
            X
          </span>
        </div>
      ))}
    </div>
  );
}

export default Output;
