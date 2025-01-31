import React from 'react'

const Create = () => {
  return (
    <form action=""
    className='flex flex-col p[5%] w-screen  h-screen'>
     <h1 className='text-3xl'>Add New Product</h1> 
     <input 
     type="text"
     placeholder='title'
     className="text-2xl bg-zinc-100 rounded p-3 w-1/2"
    />  
    </form>
  )
}

export default Create