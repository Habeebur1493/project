import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import axios from "axios";
import Loading from "./Loading";
import { ProductContext } from "./utils/Context";


const Details = () => {
  const [products, setproducts] = useContext(ProductContext);
  const [product, setproduct] = useState(null)
  const { id } = useParams();

  // const getsingleproduct = async () => {
  //   try {
  //     const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  //     console.log(data)
  //     setproduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if(!product){
      setproduct(products.filter((p) => p.id == id)[0]);
    }
    // getsingleproduct();
  }, []);

  return product ? ( 
    <div className="w-[70%] flex h-full justify-between items-center m-auto py-[10%] ">
      <img
        className="object-contain h-[80%] w-[40%]"
        src={product.image}
        alt=""
      />

      <div className="content w-[50%]">
        <h1 className="text-5xl">
          {product.title}
        </h1>
        <h3 className="text-zinc-600 text-3xl my-5">{product.category}</h3>
        <h2 className="text-red-600 text-4xl my-3">$ {product.price}</h2>
        <p className="text-zinc-800 text-2xl mb-10">
          {product.description}
        </p>
        <Link className="mr-5 py-4 px-10 border rounded text-white text-xl bg-blue-600">
          Edit
        </Link>
        <Link className="py-4 px-10 border rounded text-white text-xl bg-red-600">
          Delete
        </Link>
      </div>
    </div> 
    ) : ( 
    <Loading />
  );
};

export default Details;
