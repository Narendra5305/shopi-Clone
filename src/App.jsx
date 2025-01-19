import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { CartContextProvider } from './context/cartcontext';

import NavBar from './components/navbar/navbar';
import Home from './pages/home/home';
import Clothes from './pages/clothes/clothes';
import Electronics from './pages/electronics/electronics';
import Furnitures from './pages/furnitures/furniture';
import Toys from './pages/toys/toys';
import MyOrder from './pages/myorders/myorder';
import MyAccount from './pages/myaccounts/myaccount';



function App() {
  

  return (
    <CartContextProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/clothes' element={<Clothes/>}/>
          <Route path='/electronics' element={<Electronics/>}/>
          <Route path='/furnitures' element={<Furnitures/>}/>
          <Route path='/toys' element={<Toys/>}/>

          <Route path='/myOrder' element={<MyOrder/>}/>
          <Route path='/myAccount' element={<MyAccount/>}/>
          
        </Routes>
      </Router>
    </CartContextProvider>
  )
}

export default App
