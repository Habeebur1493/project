import React from 'react'
import { Link } from 'react-router-dom'



const Details = () => {
  return (
    <div className='w-[70%] flex h-full justify-between items-center m-auto py-[10%] '>

      <img 
      className='object-contain h-[80%] w-[40%]'
      src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
      <div className="content w-[50%]">
        <h1 className='text-4xl'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <h3 className='text-zinc-400 my-5'>men's clothing</h3>
        <h2 className='text-red-600 my-3'>$ 109.95</h2>
        <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing</p>
        <Link>Edit</Link>
        <Link>Delete</Link>
      </div>

    </div>
  )
}

export default Details