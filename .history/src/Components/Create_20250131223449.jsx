import React, { useState } from "react";

const Create = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  return (
    <form
      action=""
      className="flex flex-col p[5%] items-center w-screen  h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Add New Product</h1>
      <input
        type="url"
        placeholder="image Link"
        className="mb-3 text-2xl bg-zinc-100 rounded p-3 w-1/2"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="mb-3 text-2xl bg-zinc-100 rounded p-3 w-1/2"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <select name="Select" id=""
        className="mb-3 text-2xl bg-zinc-100 rounded p-3 w-[48%]"
        onChange={(e) => setcategory(e.target.value)}
        value={price}
        >
            <option value="Men's">Men's</option>
            <option value="Women's">Women's</option>
            <option value="Kids's">Kids's</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
            <option value="Shoes">Shoes</option>
            <option value="Others">Others</option>
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
        className="b-3 text-2xl bg-zinc-100 rounded p-3 w-1/2"
        onChange={(e) => setdescription(e.target.value)}
        value={description}
      ></textarea>
    </form>
  );
};

export default Create;
