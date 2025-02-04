import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <>
    <Nav />

    <div className='w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
          <Link
          to='Details/1'
          className='mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex
        justify-center items-center'>
            <div 
               className='hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center'
               style={{
                  backgroundImage:
                      "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
               }}
            ></div>
            <h1 className="hover:text-blue-300">Lorem ipsum dolor sit amet.</h1>
        </Link>
    </div>
    </>
  )
}

export default Home