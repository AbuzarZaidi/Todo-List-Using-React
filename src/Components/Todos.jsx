import React,{useState,useEffect} from 'react'
import Todo from './Todo';
import sort from '../Assets/sort.png';
import './Todos.css'
import Tooltip from '@mui/material/Tooltip';
const Todos = () => {
    let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
    const [flag,setFlag]=useState(false);
    const [checkEmpty,setCheckEmpty]=useState(false);
    const [inputTodo,setInputTodo]=useState("+ Add Todo here.");
    const [showTodos,setShowTodos]=useState(initTodo );
    const SortHandler=()=>{
     let initTodo = JSON.parse(localStorage.getItem("todos"));
     initTodo.reverse();
     setShowTodos(initTodo)
      localStorage.setItem("todos", JSON.stringify(initTodo));

    }
    const removeplaceHolder=()=>{
        if(flag===false){
            setInputTodo(" ")
           setFlag(true);
        }
        return;
    }
    const onChangeHandler=(event)=>{
        setInputTodo(event.target.value)
        setCheckEmpty(true);
    }
    const onClickHandler=()=>{
      if(checkEmpty===true){
        let todoChecked=0;
        let data={todoChecked,inputTodo};
         setShowTodos([...showTodos, data]);
         console.log(data);
      }
      setCheckEmpty(false);
        setInputTodo("+ Add Todo here.");
        setFlag(false);
    }
    const deleteHandler=(id)=>{
        setShowTodos((oldArray)=>{
            return oldArray.filter((arr,index)=>{
                return index!=id;
            })
        })
        localStorage.setItem("todos", JSON.stringify(showTodos));
    }
    const completeHandler=(id)=>{
 let checkValue = JSON.parse(localStorage.getItem("todos"));
 checkValue[id].todoChecked=1;
 setShowTodos(checkValue);
      localStorage.setItem("todos", JSON.stringify(showTodos));
  }
 
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(showTodos));
      }, [showTodos]);
      return (
        <div>
         
         <div id="sortIconDiv">  
         <img src={sort} onClick={SortHandler}  id="sortIcon"/> 
         </div>
         
         <br />
            <div className="centerInput">
            <input type="text" id="inputTodo" value={inputTodo}  onClick={removeplaceHolder} onChange={onChangeHandler}/>
            <Tooltip title="Add ToDo">
            <button id="addButton" onClick={onClickHandler}>+</button>
            </Tooltip>
            </div>
            <br />
            <div>
            <ul className="list-group list-group-numbered" id="showTodos">
               {showTodos.map((arrEle,index)=>{
    return( <Todo todos={arrEle} completeTodo={completeHandler} deleteTodo={deleteHandler} id={index} key={index} />)
               })}
                </ul>
            </div>
        </div>
        )
    }
    
    export default Todos