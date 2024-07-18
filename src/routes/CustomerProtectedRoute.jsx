import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const CustomerProtectedRoute = ({ children }) => {
  const accessToken = useSelector((state) => state.authReducer.access_token);

  if (!accessToken) {
    const currentPath = window.location.pathname + window.location.search;
    window.location.href = `/login?redirect=${encodeURIComponent(currentPath)}`;
    return <Navigate to="/login" replace />;
  }
  return <>{children || <Outlet />}</>;
};

export default CustomerProtectedRoute;
