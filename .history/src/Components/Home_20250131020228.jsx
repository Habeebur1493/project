import React from 'react'

const Home = () => {
  return (
    <div className='h-screen w-screen'>
      <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
        <a className='py-3 px-5 border rounded border-blue-200 text-blue-300' 
        href="/create">
          Add New Product
        </a>
        <hr  className='my-3 w-[80%]'/>
        <h1 className='text-2xl mb-3 w-[80%]'>Category</h1>
        <ul className='w-[80%]'>
          <li className='bg-red-400 mb-3'>
          <span className='rounded-full inline-block w-[15px] h-[15px] bg-blue-400'></span>
          </li>
        </ul>
      </nav>
      
    </div>
  )
}

export default Home