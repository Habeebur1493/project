import React from 'react'
import { Link } from 'react-router-dom'



const Details = () => {
  return (
    <div className='w-[70%] flex h-full bg-red-100 m-auto py-[10%] '>

      <img 
      className='object-contain h-[70%] w-[50%]'
      src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
      <div className="content">
        <h1 className='text-5xl'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <h2>109.95</h2>
        <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing</p>
        <Link>Edit</Link>
        <Link>Delete</Link>
      </div>

    </div>
  )
}

export default Details