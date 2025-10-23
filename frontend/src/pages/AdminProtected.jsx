import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const AdminProtected = ({ children }) => {
  const { isAuthenticated } = useContext(AdminContext);
  const token = localStorage.getItem("adminToken");

  if (!isAuthenticated && !token) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default AdminProtected;
