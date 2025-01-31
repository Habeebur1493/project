import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Home from './Components/Home.jsx'

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
    </>

  )
}

export default App