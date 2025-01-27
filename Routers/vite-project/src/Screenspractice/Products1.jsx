import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './Products'

export const Products = () => {
    const [data,setData]=useState(products)
const params=useParams()
console.log(params)
// console.log(data)

useEffect(()=>{
 let filterdata=products.filter((v)=>v.category==params.category)
setData(filterdata)

},[params.category])
  return (
<>
{/* <h2>This is User {params.Username}</h2>
<h2>The password is {params.Password}</h2> */}
<h1>products</h1>

{
    data&& data.map((response)=>{
        return(
            <>
            <div className="products" style={{
                border:"1px solid red",
                width:"40vw",
                height:"55vh"
            }}>
                <h2>{response.category}</h2>
                <h3>{response.title}</h3>
                <h3>{response.price}</h3>
                <img src={response.image} alt="" height={"80vh"} width={"60vw"} />
                <p>{response.description}</p>

            </div>
            </>
        )
    })
}



</>

  )
}
