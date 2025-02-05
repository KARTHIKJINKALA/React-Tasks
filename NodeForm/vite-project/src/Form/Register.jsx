
import React, { useState } from 'react'
import axios from 'axios';
import "./Register.css"
 const Register = () => {

  const [formData,setFormdata]=useState({
   
    username:"",
    password:"",
    role:""

  });
  
  
  // const valuesHandle=(e)=>{

  //   setFormdata({
  //     ...formData,
  //     [e.target.name]:e.target.value
  
  //   })
  //   console.log(formData)

  // }

  const userHandler=(e)=>{
    e.preventDefault();

    setFormdata({
      ...formData,username:e.target.value
    })
    // console.log(formData)
  }
  const passHandler=(e)=>{
    e.preventDefault();

    setFormdata({
      ...formData,password:e.target.value
    })
    // console.log(formData)

  }

  const roleHandler=(e)=>{
    e.preventDefault();

    setFormdata({
      ...formData,role:e.target.value
      
    })
    // console.log(formData)
  }
// console.log(formData)

  const onSubmited=async(e)=>{
    e.preventDefault();
    console.log(formData)


    //SENDING THE DATA TO THE BAACKEND USING THE AXIOS
    try {
      const response = await axios.post('http://localhost:3005/register', formData);
      // const response = await axios.post("http://127.0.0.1:3008/register", formData);

      console.log('User added successfully:', response.data);
      
    } catch (error) {
      console.error('Error adding user:', error);
     
    }

    // try {
    //   const response = await fetch("http://localhost:3008/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const result = await response.json();
    //   console.log("Response from backend:", result);
    // } catch (error) {
    //   console.error("Error sending form data:", error);
    // }

  }

  return (
    <>
   <div className="form">
    <h3>REGISTER FORM</h3>
   <form action="" onSubmit={onSubmited}>
        <label htmlFor="username"></label>
        <input type="text" 
        name="" id="username"
        placeholder='username' 
        autoFocus 
        value={formData.username} 
        onChange={userHandler}  />
          <br /><br />

        <label htmlFor="password"></label>
        <input type="password"
        name="" id="password"
        placeholder='password'
        value={formData.password} 
         onChange={passHandler}/>
         <br /><br />

        <select name="role" id="dropdown" value={formData.role} onChange={roleHandler}>
           <option value="buy">buy</option>
           <option value="sell">sell</option>
          
        </select>
        <br /><br /><br />

       

        <button type='submit'>Submit</button>

        

    </form>
   </div>
    
    </>
  )
}

export default Register;
