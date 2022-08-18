import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    let {user,loading} = useAuth();
    let location = useLocation();

    if(loading){return <Spinner animation="grow" variant="success" />}

    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
      return children;
  };

export default PrivateRoute;