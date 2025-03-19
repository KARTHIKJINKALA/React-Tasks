import React, { useEffect, useReducer } from 'react'


// Avoid defining InitialState and dataReducer inside the component because it reinitializes 
// them on every render.


//action types
const Fetch_Init = "FETCH_INIT"
const Fetch_Start = "FETCH_START"
const Fetch_Error = "FETCH_ERROR"

const InitialState = {
    loading: true,
    data: null,
    error: null,

}
const dataReducer = (state, action) => {
    switch (action.type) {
        case Fetch_Init:
            return { ...state, loading: true, error: null }

        case Fetch_Start:
            return { ...state, loading: null, data: action.payload }
        case Fetch_Error:
            return { ...state, loading: null, error: action.payload }

            default:
                return state;

    }


}

export const Usereducer = () => {
    const [state, dispatch] = useReducer(dataReducer, InitialState)
    
    const dataHandler=async()=>{
try {
    dispatch({type:Fetch_Init})

    const data=await fetch("https://jsonplaceholder.typicodecom/users")
    const res=await data.json()
    dispatch({type:Fetch_Start,payload:res})
    console.log(res)
} catch (error) {
    dispatch({type:Fetch_Error,payload:error})
    
}
       

    }
    useEffect(()=>{
    dataHandler()
    },[])

    return (
        <>
            <h3>This is the use reducer</h3>
         <div>
            {
                state.loading && <p>Loading...</p>
            }
            {state.data && (
                <>
                <div className="data">
                    {
                        state.data.map((items,index)=>{
                            return(
                                <>
                                <h3 key={index}>{items.name}</h3>
                                </>
                            )
                        })
                    }
                </div>
                </>
            )}
            {
                state.error && <p>{state.error.message}</p>
            }


         </div>
        </>
    )
}
