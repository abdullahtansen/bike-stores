import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const AdminRoute = ({ children }) => {
    let {user,admin,loading} = useAuth();
    let location = useLocation();

    if(loading){return <Spinner animation="grow" variant="success" />}

    if (!user.email && admin) {
        return <Navigate to="/" state={{ from: location }} replace />;
      }
      return children;
  };

export default AdminRoute;