import axios from "axios";
import React, { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export const ProductContext = createContext();
function ProductProvider({ children }) {
  const navigator = useNavigate();
  const [productList, setList] = useState([]);
  const [error, setError] = useState("");
  const addProduct = async (payload) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/products",
        payload,
      );
      if (res.data.success) {
        navigator("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const loadProducts = async () => {
    try {
      console.log("called")
      const res = await axios.get("http://localhost:3000/api/products");
      console.log(res.data);
      setList(res.data.list);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ProductContext.Provider
      value={{ error, addProduct, productList, loadProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
