import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import { useEffect } from "react";
function GrossaryListPage() {
  const { loadProducts, productList, setEdit, setProduct, editProduct } =
    useContext(ProductContext);
  const navigator = useNavigate();
  useEffect(() => {
    const getProducts = async () => {
      await loadProducts();
    };
    getProducts();
    console.log(productList);
  }, []);
  const editHandler = (product) => {
    setProduct(product);
    setEdit(true);
    navigator("/product/");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          {productList.map((prod) => {
            return (
              <div className="col-12 col-lg-4" key={prod._id}>
                <div className="card bg-warning-subtle my-2">
                  <div className="card-body d-flex justify-content-between">
                    <div>
                      <h4>{prod.productName}</h4>
                      <div>{prod.productCategory}</div>
                    </div>
                    <div className="d-flex flex-column align-items-end gap-2">
                      <div className="d-flex gap-1 justify-content-center align-items-center">
                        <div className="h4 m-0">{prod.productQuantity}</div>
                        <div>{prod.productUnit}</div>
                      </div>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-success">
                          Bought
                        </button>
                        <button
                          onClick={() => editHandler(prod)}
                          className="btn btn-sm btn-warning"
                        >
                          Edit
                        </button>
                        <button className="btn btn-sm btn-danger text-white">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
