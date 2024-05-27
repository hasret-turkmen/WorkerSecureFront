import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/HelmetChecker.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [name, setName] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            const token = response.data.token;
            setToken(token);
            setName(response.data.name);
            localStorage.setItem('token', token); // Save token to local storage
            console.log("Login successful, token stored:", token);
            console.log("Token in localStorage after login:", localStorage.getItem('token'));
        } catch (error) {
            console.error('Login error', error);
        }
    };

    return (
        <div className="login-container">
            {!token ? (
                <div className="login-form">
                    <h1>Login</h1>
                    <input 
                        type="text" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            ) : (
                <div className="welcome-container">
                    <div className="welcome-message">
                        <p>Welcome, {name}</p>
                        <p>What would you like to do?</p>
                    </div>
                    <div className="navbar-links">
                        <Link to="/video">Video</Link>
                        <Link to="/notifications">Notifications</Link>
                        <Link to="/user-management">User Management</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
