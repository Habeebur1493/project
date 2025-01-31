import React, { useContext } from "react";
import { ProductContext } from "./utils/Context";
import { Link, useNavigate,  } from "react-router-dom";
import { useState } from "react";



const Nav = () => {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");


  let category  = 
  products && products.reduce((acc, cv)=>[...acc, cv.category], []);
  category = [...new Set(category)];

  const handleLogout =()=>{
    localStorage.removeItem("token");
    navigate("/");
  }  
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <nav className="w-[20%] h-[100%] bg-zinc-100 flex flex-col items-center pt-5  ">
        <a
          className="mt-20 py-4 px-5 border rounded text-white text-xl bg-blue-600"
          href="/create"
        >
          Add New Product
        </a>
        <hr className="my-3 w-[80%]" />
        <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
        <div className="w-[80%]">
          
          {category.map((c, i) => (
            
          <Link 
          key={i}
          to={`/?category=${c}`}
           className="flex items-center mb-3">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-400"></span>
            {""}
            {c}
          </Link>
          ))}
        </div>
      </nav>

      <nav className="w-screen h-[10%] bg-zinc-100 flex justify-evenly items-center absolute overflow-y-auto">
        <h1 className=" mr-5 text-4xl text-bold text-blue-600">Product Listing</h1>
        <input 
        type="text" 
        placeholder="Search Product" 
        className="mr-5 py-4 px-10 border rounded text-black text-xl bg-white" />
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        <ul className="flex gap-10 text-2xl">
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Services">Services</Link>
          <Link to="/Contact">Contact</Link>           
        </ul>
          <button 
            onClick={handleLogout}
            className='mr-5 py-4 px-10 border rounded text-white text-xl bg-blue-600'>
            Logout</button>
      </nav>
    </>
  );
};

export default Nav;
