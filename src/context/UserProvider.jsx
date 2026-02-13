import React, { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

function UserProvider({ children }) {
  const navigator = useNavigate();
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")));
  const [error, setError] = useState("");
  const login = async (payload) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/login",
        payload,
      );
      if (res.data.success) {
        localStorage.setItem("auth", "true");
        localStorage.setItem("token", JSON.stringify(res.data.token));
        setAuth(true);
        navigator("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <UserContext.Provider value={{ auth, login, error }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
