import React, { useContext } from 'react'
import { UserContext } from '../App'

export const ComponentC = () => {

    const user=useContext(UserContext) //This is one way of consuming
  return (
    // <div>Content from component C</div>
 <>
 {/* 1 way of consumig  */}
    {/* <UserContext.Consumer>
    {(value) => {
        return(
            <>
            <h1>{value}</h1>
            </>
        )
    }}
    </UserContext.Consumer> */}


        <h1>{user}</h1>
 
 </>
  )
}
