import axios from "axios";
import React, { useEffect, useState } from "react";


export const ProductContext = createContext();

const Context = (props) => {
  const [products, setproducts] = useState(null);

  const getproducts = async () => {
    try {
      const { data } = await axios("/products");
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  return(
    <ProviderContext.Provider value={{products, setproducts}}>
        {props.children}
    </ProviderContext.Provider>
  )
}

export default Context
