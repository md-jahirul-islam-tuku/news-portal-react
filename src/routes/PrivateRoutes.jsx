import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../pages/Authentication/AuthContext";
import Loading from "../pages/Loading/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  return user ? (
    children
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
