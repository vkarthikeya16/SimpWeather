import React from 'react'
import Weather from './components/weather/Weather'
import  ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Home from './components/home/Home'
import '../src/App.css'
import Login from './components/login/Login'

import Signup from './components/signup/Signup';

const App = () => {
  return (
<>

<nav className='nav'>
          <ul className='nav-list'>
            <li className='nav-item'><Link to="/" className='nav-link'>Home</Link></li>
            {/* <li className='nav-item'><Link to="/weather" className='nav-link'>Weather</Link></li> */}
            <li className='nav-item'><Link to="/login" className='nav-link'>Login</Link></li>
            <li className='nav-item'><Link to="/signup" className='nav-link'>SignUp</Link></li>
          </ul>
        </nav>

 

  <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/weather' element={<Weather />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
   </Routes>


  </>
  )
}

export default App