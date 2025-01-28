import React, { useEffect, useMemo, useState } from 'react'

export const UseMemo = () => {
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(0)

console.log("hi")

    const complexLogic=()=>{
     
        console.log("hello")
        // return count % 2==0
        let sum=0

        for(let i=0;i<1000000;i++){
            sum+=i
        }

        return sum
    }  

    const result=useMemo(()=>{
        complexLogic()
    },[count])

    console.log(result)


    // useEffect(()=>complexLogic(),[])

  return (


    <>
    <h4>This is use memo</h4>

    <h2>counter{count}</h2>
    <button onClick={()=>setCount((count)=> count+1)}>count{count}</button>
    <button onClick={()=>setCount1((count1)=> count1+1)}>count{count1}</button>

    {/* {complexLogic()?"even":"odd"} */}
    {result}
    

    </>
  )
}
