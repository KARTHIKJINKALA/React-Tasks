import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Homescreen from '../Screens/Homescreen'
import Aboutscreen from '../Screens/Aboutscreen'
import Contactscreen from '../Screens/Contactscreen'
import { Settingscreen } from '../Screens/Settingscreen'
import { Invalidscreen } from '../Screens/Invalidscreen'

export const Stack = () => {
  return (
 <BrowserRouter>
 <Routes>
    <Route path='/' Component={Homescreen}/>
    <Route path='/About' Component={Aboutscreen}/>
    <Route path='/Contact' Component={Contactscreen}/>
    <Route path='/Settings' Component={Settingscreen}/>
    <Route path='*' Component={Invalidscreen}/>

 </Routes>
 </BrowserRouter>

  )
}
