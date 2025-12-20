import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../pages/Authentication/AuthContext";

const AuthRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  if (user) {
    return (
      <Navigate
        to={location.state?.from?.pathname || "/0"}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};

export default AuthRoutes;
