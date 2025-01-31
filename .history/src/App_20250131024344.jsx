import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Home from './Components/Home.jsx'

const App = () => {
  return (
    <div className='h-screen w-screen flex'>
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
    </div>

  )
}

export default App