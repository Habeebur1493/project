import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { ProductContext } from "./utils/Context";
import Loading from "./Loading";

const Home = () => {
  const [products] = useContext(ProductContext);
  console.log(products);
  if(!products){
    return <Loading/>
  }
  return (
    <>
      <Nav />

      <div className="w-[85%] px-3 py-25 flex flex-wrap overflow-x-hidden overflow-y-auto">
        {products.map((p, i) => {
)}
      </div>
    </>
  )
};
export default Home;
