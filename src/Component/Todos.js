import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  let myStyle = {
    minHeight: "70vh",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="text-center my-3 ">Todos List</h3>
      {props.todos.length ? (
        props.todos.map((item) => {
          return (
            <TodoItem todo={item} key={item.sno} onDelete={props.onDelete} />
          );
        })
      ) : (
        <div className="my-3 card">
          <div className="card-body">
            <h4 className="text-center my-3">No Todos Present</h4>
          </div>
        </div>
      )}
    </div>
  );
}
