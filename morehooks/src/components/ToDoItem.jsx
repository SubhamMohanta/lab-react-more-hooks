import React, { useReducer } from 'react'
import "../../src/App.css"

const ToDoItem = ({item: {data, isHidden}, index, dispatch}) => {
    const toggleVisibility = () => {
        console.log((!isHidden))
    };
  return (
    <div>
    <h3>{isHidden?"This Content is Hidden":data}</h3>
    <button onClick={()=>{
        {dispatch({type:"CHANGE_ISHIDDEN", payload:index})}
    }}
        >Toggle</button>
    </div>
  )
}

export default ToDoItem