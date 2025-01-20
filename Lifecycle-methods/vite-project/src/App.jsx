import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Lifecycle from './Lifecycle/Lifecycle'
import Mounting from './Mounting/Mounting'
import Unmounting from './Unmounting/Unmounting'


function App() {


  return (
    <>
     {/* <Lifecycle/> */}
     {/* <Mounting color={"orange"}/> */}
     <Unmounting/>
    </>
  )
}

export default App;
