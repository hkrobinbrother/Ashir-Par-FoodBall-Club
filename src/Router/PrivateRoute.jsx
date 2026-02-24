import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import LoadingSpinner from "../Components/Sheared/LoadingSpinner";

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingSpinner/>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;