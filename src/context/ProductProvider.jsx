import axios from "axios";
import React, { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export const ProductContext = createContext();
function ProductProvider({ children }) {
  const navigator = useNavigate();
  const token = localStorage.getItem("token");
  const [productList, setList] = useState([]);
  const [error, setError] = useState("");
  const [isEditable, setEdit] = useState(false);
  const [editProduct, setProduct] = useState(null);
  const addProduct = async (payload) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/products",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (res.data.success) {
        navigator("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  const updateProduct = async (payload) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/api/products/${payload._id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (res.data.success) {
        navigator("/");
        setEdit(false);
        setProduct(null);
      }
    } catch (err) {
      setError(err.message);
    }
  };
  const deleteProduct = async (payload) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/products/${payload._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (res.data.success) {
        navigator("/");
        loadProducts();
      }
    } catch (err) {
      setError(err.message);
    }
  };
  const loadProducts = async () => {
    try {
      console.log("called");
      const res = await axios.get("http://localhost:3000/api/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      setList(res.data.list);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        error,
        addProduct,
        productList,
        loadProducts,
        isEditable,
        setEdit,
        editProduct,
        setProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
