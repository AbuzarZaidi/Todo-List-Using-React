import React from "react";
import "./Todo.css";
const Todo = (props) => {
    return (
      <>
        <li className="my-2 p-3 list-group-item list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">{props.todos}</div>
          <button class="badge  rounded-pill" id="deleteButton" onClick={()=>props.deleteTodo(props.id)}>x</button>
        </li>
      </>
    
  );
};

export default Todo;