import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const AdminProtected = ({ children }) => {
  const { isAuthenticated } = useContext(AdminContext);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminProtected;
