import React from 'react';
import { useAuth } from './AuthProvider'; // Adjust the import path as necessary

const HomePage = () => {
    const auth = useAuth();

    const handleLogout = () => {
        auth.logout();
    };

    return (
        <div>
            <h1>Welcome, {auth.user.name}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default HomePage;
