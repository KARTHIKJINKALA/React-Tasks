import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from '../Screens/Home';
import { Products } from '../Screens/Products';
import { Contact } from '../Screens/Contact';
import { Invalid } from '../Screens/Invalid';

export const Stack = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/Products' Component={Products}></Route>
        <Route path='Contact/:productitle?' Component={Contact}></Route>
        <Route path="*" Component={Invalid}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
