import { useState } from 'react';
import './Stae.css'
export default function State(){
    const[count,setCount]=useState(0)
    return(
        <>
          <h2 id="show"></h2>
      <p >{count}</p>
      <button id="btn" onClick={()=>setCount(count+1)}>+</button>
      <button id="btn"  onClick={()=>{
        if(count<=0)
        return;
      setCount(count-1)}}>-</button>
        </>
    )
}
