import { useEffect, useState } from 'react';
import './Stae.css'
export default function State(){
    const[count,setCount]=useState(0)
    useEffect(()=>{
      console.log("from useeffect")
    })
    return(
        <>
          <h2 id="show"></h2>
          <p id="co">{count}</p>
          <div id="mainbtn">
          <button id="btn" onClick={()=>setCount(count+1)}>+</button>
          <button id="btn" onClick={()=>setCount(0)}>reset</button>
          <button id="btn"  onClick={()=>{
            
            if(count<=0)
            return;
           setCount(count-1)}}>-</button>
           </div>
        </>
    )
}
