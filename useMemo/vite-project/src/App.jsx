import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpensiveComponent from './UseMemo/UseMemo'
// import { UseMemo } from './UseMemo/UseMemo'
// import { Example } from './UseMemo/Example'

function App() {

  return (
    <>
    {/* <UseMemo/> */}
    
     {/* <Example/> */}
     <ExpensiveComponent/>
    
    </>
  )
}

export default App
