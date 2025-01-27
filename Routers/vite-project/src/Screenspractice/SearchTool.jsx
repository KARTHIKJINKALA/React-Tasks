import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchTool = () => {
    const [search,setSearch]=useState("")
    const navigate=useNavigate()

    const searchItem=()=>{
       

        if(search!=""){
            navigate(`/products/${search}`)
            
        }
        else{
            alert("Add the search item")
        }
        

    }

  return (
    <>
    <input type="text" onChange={(e)=> setSearch(e.target.value)}/>
    <button onClick={searchItem}>Search</button>

    </>
  )
}
