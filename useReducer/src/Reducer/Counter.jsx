import React, { useReducer, useState } from 'react'
import { Usereducer } from './Usereducer'
export const Counter = () => {
    const InitialState={
        count:0
    }
    const reducer=(state,action)=>{
        // console.log(state.count)
        switch(action.type){
            case "increment":
                return {count:state.count+1}
                case "decrement":
                    return {count:state.count>0? state.count-1 :0}
                    case "reset":
                        return {count:0}

        }

    }
    const [state,dispatch]=useReducer(reducer,InitialState)
  return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter: {state.count}</h2>
      <button onClick={()=> dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=> dispatch({type:"decrement"})}>Decrement</button>
      <button onClick={()=> dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}
