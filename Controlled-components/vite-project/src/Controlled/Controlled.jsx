
import React, { useRef, useState } from 'react'

export const Controlled = () => {


    const [userName,setUser]=useState("")
    const [password,setPass]=useState("")
    const [email,setEmail]=useState("")



  




    const formHandler=(event)=>{

        event.preventDefault();
    }


  return (
    <>
    <form action="" onSubmit={formHandler}>

        <label htmlFor="user">Username</label>
        <input type="text" id='user'  value={userName}/>
        <br />
        <br />

        <label htmlFor="pass">password</label>
        <input type="password" id='pass'  value={password}/>
        <br />
        <br />

        <label htmlFor="mail">Email</label>
        <input type="text" id='mail'   value={email}/>
        <br />
        <br />

       <button type='submit'>Submit</button>
    </form>


    </>
  )
}
