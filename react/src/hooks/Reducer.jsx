import React, { useReducer } from "react";
function reducer(state,action){
    switch(action.type){
        case "INCREMENT":
            return {count:state.count+1}
        
        case "DECREMENT":
            return {count:state.count-1}
        
        case "RESET":
            return {count:0}
        default:
            return state;
    }
}
const initialState={count:0}
export default function Reducer(){
    const[state,dispatch]=useReducer(reducer,initialState)
    return(
        <>
        <h1>usereduce example</h1>
        <h3>count:{state.count}</h3>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
        <button onClick={()=>dispatch({type:"RESET"})}>reset</button>
        </>
    )
}