import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductProvider";

function ProductPage() {
  const {error, addProduct} = useContext(ProductContext);
  const [formData, setData] = useState({
    productCategory: "",
    productName: "",
    productQuantity: "",
    productUnit: "",
  });
  const reset = () => {
    setData({
      productCategory: "",
      productName: "",
      productQuantity: "",
      productUnit: "",
    });
  };
  const changeHandler = (e) => {
    setData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submitHander = (e) => {
    e.preventDefault();
    addProduct(formData);
    reset();
  };
  return (
    <div
      style={{ height: "85vh" }}
      className="container d-flex justify-content-center align-items-center"
    >
      <form onSubmit={submitHander} className="w-50 card p-3 shadow gap-4">
        <h1 className="text-center mb-2">Login Here</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <input
          type="text"
          value={formData.productCategory}
          onChange={changeHandler}
          placeholder="enter product category"
          className="form-control"
          name="productCategory"
        />
        <input
          type="text"
          value={formData.productName}
          onChange={changeHandler}
          placeholder="enter product name"
          className="form-control"
          name="productName"
        />
        <input
          type="number"
          value={formData.productQuantity}
          onChange={changeHandler}
          placeholder="enter product quatity"
          className="form-control"
          name="productQuantity"
        />
        <input
          type="text"
          value={formData.productUnit}
          onChange={changeHandler}
          placeholder="enter product unit"
          className="form-control"
          name="productUnit"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductPage;
