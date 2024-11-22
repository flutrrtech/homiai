import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
  const { isLoggedIn  } = useAuth()
  const bool = localStorage.getItem("isLoggedIn")


  return <>{bool ? <Outlet /> : <Navigate to="/login" />}</>
};

export default PrivateRoute;
