import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isLoggedIn, isAdmin, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        isLoggedIn && isAdmin ? (
          children
        ) : (
          <Navigate to="/login" state={{ from: rest.location }} replace />
        )
      }
    />
  );
};

export default PrivateRoute;