import React from 'react';
import { useAuth } from './AuthProvider'; // Adjust the import path as necessary
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = useAuth();

    return auth.user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
