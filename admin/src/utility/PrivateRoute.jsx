// utility/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ component: Component }) {
  const isLoggedIn = !!localStorage.getItem("accessToken"); // Adjust according to your auth token key

  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
}

export default PrivateRoute;
