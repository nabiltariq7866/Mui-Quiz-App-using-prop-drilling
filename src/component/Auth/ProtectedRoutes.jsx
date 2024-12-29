import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AppContext from "../../context/AuthContext";

const ProtectedRoutes = ({ role, Element }) => {
  const context = useContext(AppContext);
  const auth = context.userData;

  if (!auth.login) {
    return <Navigate to="/" replace />;
  }

  if (auth.login && role.includes(auth.role)) {
    return Element;
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoutes;
