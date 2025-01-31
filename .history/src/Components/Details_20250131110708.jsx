import React from 'react'
import { Link } from 'react-router-dom'


const Details = () => {
  return (
    <div className='w-[70%] h-full bg-red-100 m-auto p-[10%]'>

      <img src="" alt="" />
      <div className="content">
        <h1>Title</h1>
        <h2>Price</h2>
        <p>Description</p>
        <Link>Edit</Link>
        <Link>Delete</Link>
      </div>

    </div>
  )
}

export default Details