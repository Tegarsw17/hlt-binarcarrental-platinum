import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
  const accessAdmin = useSelector(
    (state) => state.authAdminReducer.access_token_admin
  );
  if (!accessAdmin) {
    const currentPath = window.location.pathname + window.location.search;
    window.location.href = `/admin/login?redirect=${encodeURIComponent(currentPath)}`;
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children || <Outlet />}</>;
};

export default AdminProtectedRoute;
