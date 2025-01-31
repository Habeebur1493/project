import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { use } from 'react'

export const ProductContext = createContext()

const Context = (props) => {
    const [products, setproducts] = useState(null)

    const getproducts = async () => {
        try{
            const {data} = await axios ('/products')
        } catch (error) {
         console.log(error)   
        }
    }  
    
    useEffect(() => {
        getproducts()
    }, []) 

  return (
    <ProviderContext.Provider>
        {props.children}
    </ProviderContext.Provider>
  )
}

export default Context