import React from "react";
import { useContext, useState } from "react";
import { ProductContext } from "./utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const { products, setproducts } = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setproduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  const ChangeHandler = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  const AddProductHandler = (e) => {
    e.preventDefault();

    const pi = products.findIndex((p) => p.id == id);
    const copyData = [...products];
    copyData[pi] = {...products[pi], ...product};
    
    setproducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    navigate("-1");
  };
  return (
    <form
      onSubmit={AddProductHandler}
      action=""
      className="mt-10 flex flex-col p[5%] items-center w-screen  h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Edit Product</h1>
      <input
        type="url"
        placeholder="product image Link"
        className="mb-3 text-2xl bg-zinc-100 rounded p-3 w-1/2"
        name="image"
        onChange={ChangeHandler}
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="product title"
        className="mb-3 text-2xl bg-zinc-100 rounded p-3 w-1/2"
        name="title"
        onChange={ChangeHandler}
        value={product && product.title}
      />
      <div className="w-1/2 flex justify-between">
        <select
          name="category"
          id="category"
          className="mb-3 text-2xl bg-zinc-100 rounded p-3 w-[48%]"
          onChange={ChangeHandler}
          value={product && product.category}
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
          name="price"
          onChange={ChangeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
        id=""
        rows="10"
        placeholder="Enter Product Description here.."
        className="b-3 text-2xl bg-zinc-100 rounded p-3 w-1/2"
        onChange={ChangeHandler}
        name="description"
        value={product && product.description}
      ></textarea>
      <div className="w-1/2 mt-5">
        <button className="py-4 px-10 border rounded text-white text-xl bg-blue-600">
           Add Product
        </button>
      </div>
    </form>
  );
};

export default Edit;
