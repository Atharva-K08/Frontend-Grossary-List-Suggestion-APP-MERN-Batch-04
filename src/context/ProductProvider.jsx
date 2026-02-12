import React from 'react'
import { createContext } from 'react';
export const ProductContext = createContext();
function ProductProvider({children}) {
  return (
    <ProductContext.Provider value={{}} >
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider