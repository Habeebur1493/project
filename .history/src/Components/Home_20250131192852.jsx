import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { ProductContext } from "./utils/Context";
import Loading from "./Loading";
import axios from "axios";

const Home = () => {
  const { products } = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setfilteredProducts] = useState(products);

  const getproductscategory = async () => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (category.length > 0) getproductscategory();
    else setfilteredProducts(products);
  }, [category]);

  console.log(filteredProducts);

  if (!products) {
    return <Loading />;
  } else if (products.length < 0) {
    return <h1 className="text-center text-3xl">No products found</h1>;
  }
  return (
    <>
      <Nav />
      <div className="w-[85%] px-3 py-25 flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((p) => (
            <Link
              key={p.id}
              to={`/details/${p.id}`}
              className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex
         justify-center items-center"
            >
              <div
                className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${p.image})` }}
              ></div>
              <h1 className="hover:text-blue-300">{p.title}</h1>
            </Link>
          ))}
      </div>
    </>
  );
};
export default Home;
