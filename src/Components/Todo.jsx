import React from "react";
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import "./Todo.css";
const Todo = (props) => {
    return (
      <>
        <li className="my-2 p-3 list-group-item list-group-item d-flex justify-content-between align-items-start">
       
          <div className="ms-2 me-auto" style={{textDecoration: props.todos.todoChecked===1?'line-through':'none'}}> { props.todos.todoChecked===0?<Tooltip title="Click To Complete Todo"><Checkbox   color="success" onChange={()=>props.completeTodo(props.id)}/></Tooltip>:""} {props.todos.inputTodo}</div>
          <button class="badge  rounded-pill" id="deleteButton" onClick={()=>props.deleteTodo(props.id)}>x</button>
        </li>
      </>
    
  );
};

export default Todo;

