import React,{useState} from 'react'
import Todo from './Todo';
import './Todos.css'
const Todos = () => {
    const [flag,setFlag]=useState(false);
    const [checkEmpty,setCheckEmpty]=useState(false);
    const [inputTodo,setInputTodo]=useState("+ Add Todo here.");
    const [showTodos,setShowTodos]=useState([]);
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
        setShowTodos((oldArray)=>{
            return [...oldArray,inputTodo];
        })
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
    }
    return (
    <div>
     <br />
        <div className="centerInput">
        <input type="text" id="inputTodo" value={inputTodo}  onClick={removeplaceHolder} onChange={onChangeHandler}/>
        <button id="addButton" onClick={onClickHandler}>+</button>
        </div>
        <br />
        <div>
        <ul className="list-group list-group-numbered" id="showTodos">
           {showTodos.map((arrEle,index)=>{
return( <Todo todos={arrEle} deleteTodo={deleteHandler} id={index} key={index} />)
           })}
            </ul>
        </div>
    </div>
    )
}

export default Todos
