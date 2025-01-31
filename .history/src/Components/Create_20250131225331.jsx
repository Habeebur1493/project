import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "./utils/Context";

const Create = () => {
  const [products, setproducts] = useContext(ProductContext)  
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  
  const AddProductHandler = (e) => {
    e.preventDefault();
    const product ={
        title,
        image,
        category,
        price,
        description,
    } 
    setproducts([...products, product])
    
  }
  
  return (
    <form 
       onSubmit={AddProductHandler} 
      action=""
      className="mt-10 flex flex-col p[5%] items-center w-screen  h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Add New Product</h1>
      <input
        type="url"
        placeholder="product image Link"
        className="mb-3 text-2xl bg-zinc-100 rounded p-3 w-1/2"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="product title"
        className="mb-3 text-2xl bg-zinc-100 rounded p-3 w-1/2"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <select name="category" id="category"
        className="mb-3 text-2xl bg-zinc-100 rounded p-3 w-[48%]"
        onChange={(e) => setcategory(e.target.value)}
        value={category}
        >
            <option value="men">Men's</option>
            <option value="women">Women's</option>
            <option value="kids">Kids's</option>
            <option value="cosmetics">Cosmetics</option>
            <option value="electronics">Electronics</option>
            <option value="accessories">Accessories</option>
            <option value="shoes">Shoes</option>
            <option value="others">Others</option>
        </select>
        <input
          type="text,number,symbol"
          placeholder="price"
          className="mb-3 text-2xl bg-zinc-100 rounded p-3 w-[48%]"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        name=""
        id=""
        rows="10"
        placeholder="Enter Product Description here.."
        className="b-3 text-2xl bg-zinc-100 rounded p-3 w-1/2"
        onChange={(e) => setdescription(e.target.value)}
        value={description}
      ></textarea>
        <div className="w-1/2 mt-5">
        <button 
            className='py-4 px-10 border rounded text-white text-xl bg-blue-600'>
            Add Product</button>
        </div>
        
    </form>
  );
};

export default Create;
