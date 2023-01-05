import React from "react";

export default function Todoitem({ todo, onDelete }) {
  return (
    <div className="my-2 card">
      <div className="card-body">
        <h4>{todo.title}</h4>
        <h6>{todo.sno}</h6>
        <p>{todo.desc}</p>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Danger
        </button>
      </div>
    </div>
  );
}
