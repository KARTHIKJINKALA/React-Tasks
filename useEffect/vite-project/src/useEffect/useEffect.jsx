import React, { useEffect, useState } from 'react'

export const UseEffect = () => {
    // console.log(useEffect(()=>{},[]))
    const [count,setCount]=useState(0)
    const [apidata,setApidata]=useState([])

    const api= ()=>{
      fetch("https://fakestoreapi.com/products/")
      .then((response)=> response.json())
      .then((out)=> setApidata(out))    
    }


    //Here the infinite loop is formed
    // api()
    // console.log(apidata)

    // useEffect(api,[])
    // console.log(apidata)  or

    // useEffect(()=>{
    //     api()
    // },[])
    // console.log(apidata)

useEffect(()=>{
   api()
   console.log(apidata)
},[count])

  return (
<>
<h4>This is useEffect</h4>
<h3>Count is:{count}</h3>
<button onClick={()=>setCount((count)=> count+1)}>Increment:{count}</button>
</>


  )

}
