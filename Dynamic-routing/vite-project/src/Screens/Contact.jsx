import React from 'react'
import { useParams } from 'react-router-dom'
import { res } from './Data'

export const Contact = () => {
    const params=useParams()
    console.log(params)

    var out=res.find((val)=> val.id==params.productitle)
    console.log(out)

  return (
    <>
    <h3>This is Contact screen</h3>
   <h2>{params.productitle}</h2>
   <h3>{out.category}</h3>
   <h4>{out.description}</h4>

  
     
   
    </>
  )
}
