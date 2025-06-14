import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../assets/Loading/Loading";
import { AuthContext } from "../AuthProvider"; // Make sure the path is correct

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // While checking auth status, show loading
  if (loading) {
    return <Loading />;
  }

  // If no user, redirect to login page and save current location
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If user exists, show protected content
  return children;
};

export default PrivateRoutes;
