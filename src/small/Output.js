import React from "react";

function Output(props) {
  return (
    <div className="output">
      {props.todos.map((todo, index) => (
        <div className="container justify-between list-todo" key={index}>
          <div
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
          <div
            onClick={() => {
              props.deleteTodo(index);
            }}
          >
            X
          </div>
        </div>
      ))}
    </div>
  );
}

export default Output;
