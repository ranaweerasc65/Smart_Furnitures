import React from 'react'
import {Routes, Route,Navigate } from 'react-router-dom'



import Home from '../pages/Home';
import LivingRooms from './../pages/LivingRooms';
import Login from '../pages/Login';
import NewArrivals from '../pages/NewArrivals';
import Register from '../pages/Register';
import Search from '../pages/Search';
import LivingroomDetails from '../pages/LivingroomDetails';
import Thankyou from '../pages/Thankyou';




const Routers = () => {

  return (
   <Routes>

    <Route path='/' element={<Navigate to='/home'/>}/>

    <Route path='/home' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/livingrooms' element={<LivingRooms/>} />
    <Route path='/newarrivals' element={<NewArrivals/>} />
    <Route path='/thank-you' element={<Thankyou/>}/>
    <Route path='/livingrooms/search' element={<Search/>} />
    <Route path='/livingrooms/:id' element={<LivingroomDetails/>}/>

   </Routes>
  )
}

export default Routers