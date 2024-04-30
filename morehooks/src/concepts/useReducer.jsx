import React, { useReducer } from "react";

const reducer = (state, action) => {
    let { type } = action;
    if (type === "INCREASE") {
        return state + 1;
    }
    if (type === "DECREASE") {
        return state - 1;
    }

    return state;
}

const initvalue = 0;
const UseReducer = () => {

    const [count, dispatch] = useReducer(reducer, initvalue);

    return (
        <div>
            <h1>useReducer</h1>
            <h3>{count}</h3>
            <button onClick={() => dispatch({ type: "INCREASE" })}>+</button>
            <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
        </div>
    )
}

export default UseReducer;
