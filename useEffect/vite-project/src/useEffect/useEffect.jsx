import React, { useEffect, useState } from 'react'

export const UseEffect = () => {
    // console.log(useEffect(()=>{},[]))

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
    
  

 

  return (
    <h4>This is useEffect</h4>
  )

}
