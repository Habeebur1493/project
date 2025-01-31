import React, { useState } from 'react'

export const ProductContext = createContext()

const Context = (props) => {
    const [products, setproducts] = useState(null)
  return (
    <ProviderContext.Provider>
        {props.children}
    </ProviderContext.Provider>
  )
}

export default Context