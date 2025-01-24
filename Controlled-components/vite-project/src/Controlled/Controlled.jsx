
import React, { useRef, useState } from 'react'

export const Controlled = () => {


    const [userName,setUser]=useState("")
    const [userNameError,setUserNameError]=useState(false)

    const [password,setPass]=useState("")
    const [passwordError,setPasswordError]=useState(false)


    const [email,setEmail]=useState("")


    const formHandler=(event)=>{

        event.preventDefault();
    }



    const usernameValidation=(name)=>{
        var validusername=false
              if(name.length>10){
         validusername=false
                
              }
              else{
                validusername=true
              }

              return validusername
    }


     

    const usernameHandler=(event)=>{

        event.preventDefault();

        const userEntered=event.target.value
        setUser(userEntered)
        console.log(userEntered)

        if(usernameValidation(userEntered)){
            setUserNameError(false)
        }
        else{
            setUserNameError(true)
        }
    }



    const passwordValidation=(password)=>{
        
      return  password.length>10?false:true

    }

    const passwordHandler=(event)=>{
        event.preventDefault();
        // console.log(event.target.value)
        const UserEnteredPassword=event.target.value
        setPass(UserEnteredPassword)
        
        if(passwordValidation(UserEnteredPassword)){
            setPasswordError(false)

        }
        else{
            setPasswordError(true)

        }

    }

  return (
    <>
    <form action="" onSubmit={formHandler} style={{border:"1px solid red",width:"40vw",height:"40vh"}}>

        <label htmlFor="user">Username</label>
        <input type="text" id='user'  value={userName} onChange={usernameHandler}/>
        <br />
         {
            userNameError&&<span style={{color:"red"}}>Invalid username:username not sholud be more than 10 characters</span>
         }
        <br />
        <br />

        <label htmlFor="pass">password</label>
        <input type="password" id='pass'  value={password} onChange={passwordHandler}/>
        <br />
        {
            passwordError&&<span style={{color:"red"}}>Invalid Password:password not sholud be more than 10 characters</span>
           
        }
        <br />
        <br />

        <label htmlFor="mail">Email</label>
        <input type="text" id='mail'   value={email}/>
        <br />
        <br />

        {
            !userNameError && !passwordError && <button type='submit' style={{backgroundColor:"blue",color:"white" }}>Sign In</button>
            
        }

      
    </form>


    </>
  )
}
