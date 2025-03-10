import React from 'react'
import { res } from './Data'
import { Link, useParams } from 'react-router-dom'

export const Products = () => {
    console.log(res)
    var params=useParams()
    console.log(params)
    
    // value.title.replace(/\s+/g, "_")
  return (
    <>
    <h3>This is Products Screen</h3>
    {
       res.map((value)=>{
        return(
            <>
            <div className="pro" style={{border:"1px solid blue",width:"50vw"}}>
            <h2>{value.id}</h2>
           <Link to={`/Contact/${value.id}`}> <h2>{value.title}</h2></Link>
            <h3>{value.price}</h3>
            </div>

            </>
        )
       })
    }

    </>
  )
}
