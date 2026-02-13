import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

function LoginPage() {
  const { login, error } = useContext(UserContext);
  const [formData, setData] = useState({
    email: "",
    password: "",
  });
  const reset = () => {
    setData({
      email: "",
      password: "",
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
    login(formData);
    reset();
  };
  return (
    <div
      style={{ height: "100vh" }}
      className="container d-flex justify-content-center align-items-center"
    >
      <form onSubmit={submitHander} className="w-50 card p-3 shadow gap-4">
        <h1 className="text-center mb-2">Login Here</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <input
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="enter email"
          className="form-control"
          name="email"
        />
        <input
          type="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="enter password"
          className="form-control"
          name="password"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
