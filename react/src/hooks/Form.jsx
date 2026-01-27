import { useState } from 'react';
import './For.css'
export default function Form(){
    const[form,setForm]=useState({
        name:"",
        email:"",
        age:"",
        department:""
    })
    const handlechange=(e)=>{
        const{name,value}=e.target
        setForm((pre)=>({
            ...pre,
            [name]:value
        }))
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(form);

    }

    return(
        <>
        <div id="border">
        <form onSubmit={handlesubmit}>
          <label htmlFor="name">Name:</label>
          <input name="name" type="text" value={form.name}
          onChange={handlechange}/>
          <label htmlFor="email">Email:</label>
          <input name="email" type="text" value={form.email}
          onChange={handlechange}/>
          <label htmlFor="age">Age:</label>
          <input name="age" type="Number" value={form.age}
          onChange={handlechange}/>
          <label htmlFor="deparment">Department:</label>
          <input name="department" type="text" value={form.department}
          onChange={handlechange}/>
          <button  type="submit">submit</button>
        </form>
        </div>
        </>
    )
}
