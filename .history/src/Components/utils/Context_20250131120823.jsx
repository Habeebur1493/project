import axios from 'axios'
import React, { useState } from 'react'

export const ProductContext = createContext()

const Context = (props) => {
    const [products, setproducts] = useState(null)

    const getproducts = async () => {
        try{
            const {data} = await axios
        } catch (error) {
         console.log(error)   
        }
    }   

  return (
    <ProviderContext.Provider>
        {props.children}
    </ProviderContext.Provider>
  )
}

export default Context