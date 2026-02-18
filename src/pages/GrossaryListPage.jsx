import React from "react";
import { NavLink } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
function GrossaryListPage() {
  return (
    <div>
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
