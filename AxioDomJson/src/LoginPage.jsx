import React, { useState } from 'react';
import { useAuth } from './AuthProvider'; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.login(username);
        navigate('/'); // Redirect to home or any protected route
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
