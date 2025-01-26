import React, { useState } from 'react';


const Admin = () => {
    const [users,setUser]=useState("")
    const [password,setPassword]=useState("")
    const [checkAdmin,setAdmin]=useState(true)
  
    const fetchDataAndCompare = async () => {
        try {
          const response = await fetch('http://localhost:3000/admins');
          const data = await response.json();
          
        console.log(data)
        } catch (error) {
          console.error('Error fetching data:', error);
         
        }
      };

     
    

    const Userclick=(e)=>{
       e.preventDefault()
        const userName=e.target.value
        console.log(userName)

        setUser(userName)
    }
    const Passwordclick=(e)=>{
        e.preventDefault()
        const UserPassword=e.target.value
        console.log(UserPassword)

        setPassword(UserPassword)

        
    }
    const Checkclick=(e)=>{
        e.preventDefault()
        const UserChecked=e.target.checked
        console.log(UserChecked)
        setAdmin(UserChecked)

    }

    const submitHandle=(e)=>{
        e.preventDefault()
        console.log(users,password,checkAdmin) 
    }

  return (
<>
<div className="login" style={{border:"1px solid green",width:"40vw",height:"40vh",marginLeft:"20%"}}>
    LOGIN
    <br />
    <br />
<form onSubmit={submitHandle}>
  <div className="form-group">
    <label htmlFor="username">Username</label>
    <input
      type="text"
      className="form-control"
      id="username"
      aria-describedby="emailHelp"
      placeholder="Enter username"

      onChange={Userclick}
      value={users}
    />
    <small id="emailHelp" className="form-text text-muted">
      We'll never share your email with anyone else.
    </small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
      onChange={Passwordclick}
      value={password}
    />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Admin
    </label>
  </div>
  <button type="submit" className="btn btn-primary" value={checkAdmin} onChange={Checkclick}>
    Submit
  </button>
</form>

</div>



</>
  );
};

export default Admin;
