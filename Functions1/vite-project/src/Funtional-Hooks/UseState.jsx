import { useState } from "react";

const UseStateExample=()=>{
    
    const initialState=10
   const [count,setCount] =useState(initialState)

//    const incrementHandler=()=>{
    // this syntax is used for the multiple updations
    // setCount((count)=>count+1)
    // setCount((count)=>count+1)

    // instead of using the above syntax we can use the 
  

    // this syntax is for the single updation
    // setCount(count+1)

//    }

//    const decrementHandler=()=>{
//     // setCount((count)=> count-1)
//     if(count>0){
//     setCount(count-1)
// }

//    }

//    const resetHandler=()=>{
//     // setCount((count)=> count-count)
//     setCount(0)

//    }

//    Instead of r=writing the multiple function w are replacing with single function by using the switch case

    const counterHandler=(type)=>{
        switch(type){
            case "increment":
                setCount(count+1);
                break;
            case "decrement":
                if(count>0){
                    setCount(count-1);
                   
                } 
                break; 

            case "reset" :
                setCount(0);
                break;

                default :
                break;
        }
    

    return(
        <>
        <h1>This is the use state example</h1>
        <h2>{count}</h2>
        <button onClick={()=>counterHandler("increment")}>Increment</button>
        <button onClick={()=>counterHandler("decrement")}>Decrement</button>
        <button onClick={()=>counterHandler("reset")}>Reset</button>

        

        </>
    )
}
}
export default UseStateExample;