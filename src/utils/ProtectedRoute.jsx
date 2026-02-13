import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { auth } = useContext(UserContext);
  return <>{auth ? children : <Navigate to="/login" replace />}</>;
}

export default ProtectedRoute;
