import React, { useReducer } from 'react'
import ToDoItem from './ToDoItem'
const todoReducer = (state, action) => {
    if (action.type == "ADD_ITEM"){
        return [
            ...state,{
                data: action.payload,
                isHidden: false
            }
        ]
    }

    if (action.type == "CHANGE_ISHIDDEN"){
        return state.map((e,i)=>{
            return i == action.payload ? {...e,isHidden:!e.isHidden} : e
        })
    }
    return state
}

const initialState = [{data: "Test" ,isHidden: false}]

const ToDoApp = () => {

    const [todo, dispatch] = useReducer(todoReducer, initialState)

    return (
        <>
        <input type="text" onKeyDown={(e)=>{
            if(e.key == "Enter"){
                dispatch({type:'ADD_ITEM', payload:e.target.value})
                console.log(todo)
            }
        }}/>

        {todo.map((e, i)=>{
            return <ToDoItem item = {e} index ={i} dispatch={dispatch}/>
        })}

        </>
    )
}

export default ToDoApp