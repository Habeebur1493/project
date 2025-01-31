import React from 'react'

const Nav = () => {
  return (
    <>
    <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
    <a className='py-4 px-5 border rounded text-white text-xl bg-blue-600' 
    href="/create">
      Add New Product
    </a>
    <hr  className='my-3 w-[80%]'/>
    <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>
    <ul className='w-[80%]'>
      <li className='flex items-center mb-3'>
        <span className='rounded-full mr-2 w-[15px] h-[15px] bg-blue-400'></span>{""}
        cat 1
      </li>
    </ul>
  </nav>
    </>
    

  )
}

export default Nav