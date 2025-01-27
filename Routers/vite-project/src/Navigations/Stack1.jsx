import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home1 } from '../Screenspractice/Home1'
import { About } from '../Screenspractice/About'
import { Contact } from '../Screenspractice/Contact'
import { Invalid1 } from '../Screenspractice/Invalid1'
import { Services1 } from '../Screenspractice/Services1'
import { User } from '../Screenspractice/User'
import { Products } from '../Screenspractice/Products1'
import { SearchTool } from '../Screenspractice/SearchTool'

export const Stack1 = () => {
  return (
   <BrowserRouter>
   <SearchTool/>
   <Routes>
    <Route path="/"  Component={Home1}></Route>
    <Route path="/About"  Component={About}></Route>
    <Route path="/User/:Username?/:Password?"  Component={User}></Route>
    <Route path="/Products/:category?" Component={Products}></Route>

    <Route path="/Services" Component={Services1}></Route>
    <Route path="/Contact"  Component={Contact}></Route>
    <Route path="*"  Component={Invalid1}></Route>
   </Routes>
   </BrowserRouter>
  )
}
