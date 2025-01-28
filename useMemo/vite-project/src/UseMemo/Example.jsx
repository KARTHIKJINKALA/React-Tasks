import React, { useMemo, useState } from 'react'

export const Example = () => {

    const [count,setCount]=useState(0)
    const[number,setNumber]=useState(2)


    let factorial = (num) => {
        let fact = 1; 
        for (let i = 1; i <= num; i++) { 
            fact = fact * i;
        }

        console.log("factorial calling")
        return fact;

    };
    
    const out=useMemo(()=>{
      return  factorial(number)
    },[number])
   
    

  return (
    <>
    <h2>{out}</h2>
     <h3>{count}</h3>
    <button onClick={()=>setCount((count)=> count+1)}>Increment Count</button>
    

    </>
  
  )
}
