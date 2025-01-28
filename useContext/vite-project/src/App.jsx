import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ComponentC } from './useContext/ComponentC'
export const UserContext=createContext()
function App() {



  return (
    <>
 
      <UserContext.Provider value={"karthik jinkala hello"}>
      <ComponentC/>
      </UserContext.Provider>
 
    
       
    </>
  )
}

export default App
