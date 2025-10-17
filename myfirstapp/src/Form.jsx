import React , {useState} from 'react'

const Form = () => {
    const [form,setFormData] = useState({});
    
    function submit(e){
      e.preventDefault();
      alert("Form Submitted successfully");
    }

    function handlechange(e){
      const name = e.target.name;
      const value = e.target.value;
      setFormData({
        ...form,
        [name]:value}
      )

    }
    console.log(form);
  return (
        <form onSubmit={submit}>
            <label htmlFor="Gender">Gender</label>
            <input type="radio" name="Male"  />
            <p>Male</p>
            <input type="radio" name="Female"  />
            <p>Female</p>
            <br />

            <label htmlFor="Name">Name : </label>
            <input type="text" name="name"  laceholder='Enter your name' onChange={handlechange}/>
            <br />

            <label htmlFor="email">Email :</label>\
            <input type="email" name="email" placeholder='Enter your email' onChange={handlechange}/>
            <br />
            
            <label htmlFor="password">Password :</label>\
            <input type="password" name="password" placeholder='Enter your password' onChange={handlechange}/>
            <br />
            
            
            <input type="submit"/>
          

            <label htmlFor=""></label>

        </form>
  )
}

export default Form