
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Invalid1 = () => {
    const navigate=useNavigate()

const Homeclick=()=>{
    navigate("/")

}
const Servicesclick=()=>{
    navigate("/Services")


}
const Aboutclick=()=>{
  navigate("/About")
}

  return (
   <>
    <h2>This is Invalid</h2>
    <button onClick={Homeclick}>Back To Home</button>
    <button onClick={Servicesclick}>Back To Services</button>
    <button onClick={Aboutclick}>Back To About</button>
   </>


  )
}
