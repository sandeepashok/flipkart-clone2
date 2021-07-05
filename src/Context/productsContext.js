import { createContext, useState } from "react";
import products from "../sampleData.json"

export const ProductContext = createContext()

export default function ProductContextProvider({ children }) {
  const [productList, setProductList] = useState([...products]);
  return (
    <ProductContext.Provider
      value={{
        productList
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}