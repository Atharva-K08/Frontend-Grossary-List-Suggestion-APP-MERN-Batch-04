import React from "react";
import { NavLink } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import { useEffect } from "react";
function GrossaryListPage() {
  const { loadProducts, productList } = useContext(ProductContext);
  useEffect(() => {
    const getProducts = async () => {
      await loadProducts();
    };
    getProducts();
    console.log(productList);
  }, []);
  return (
    <div>
      <div className="container">
        {productList.map((prod) => {
          return (
            <div key={prod._id} className="card my-2">
              <div className="card-body d-flex justify-content-between">
                <div>
                  <h4>{prod.productName}</h4>
                  <div>{prod.productCategory}</div>
                </div>
                <div className="d-flex">
                  <h4>{prod.productQuantity}</h4>
                  <div>{prod.productUnit}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <NavLink
        className="text-light text-decoration-none fw-bold position-fixed "
        style={{ bottom: "20px", right: "20px" }}
        to="/product"
      >
        <button
          className="btn d-flex justify-content-center align-content-center btn-warning m-2 shadow fw-bold fs-3"
          style={{ padding: "12px" }}
        >
          <CiSquarePlus />
        </button>
      </NavLink>
    </div>
  );
}

export default GrossaryListPage;
