import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

const Details = () => {
  const [product, setproduct] = useState(null)
  const { id } = useParams();
  const getsingleproduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setproduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsingleproduct();
  }, []);

  return product ? ( 
    <div className="w-[70%] flex h-full justify-between items-center m-auto py-[10%] ">
      <img
        className="object-contain h-[80%] w-[40%]"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <div className="content w-[50%]">
        <h1 className="text-5xl">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h3 className="text-zinc-600 text-3xl my-5">men's clothing</h3>
        <h2 className="text-red-600 text-4xl my-3">$ 109.95</h2>
        <p className="text-zinc-800 text-2xl mb-10">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday",
          "category": "men's clothing
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
