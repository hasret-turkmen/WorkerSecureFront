import axios from 'axios';
import React, { useState } from 'react';
import '../css/HelmetChecker.css';

const HelmetChecker = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [helmetStatus, setHelmetStatus] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            setToken(response.data.token);
            console.log("Login successful", response.data.token);
        } catch (error) {
            console.error('Login error', error);
        }
    };

    const checkHelmet = async () => {
        try {
            const response = await axios.post('http://localhost:5000/check-helmet', 
                { hasHelmet: false }, // Test amacıyla hasHelmet: false olarak gönderiyoruz
                { headers: { Authorization: token } }
            );
            setHelmetStatus(response.data.message);
            console.log("Helmet check", response.data.message);
        } catch (error) {
            console.error('Helmet check error', error);
        }
    };

    return (
        <div className="helmet-checker-container">
            <h1>Helmet Checker</h1>
            {!token ? (
                <div className="login-form">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
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
                <div className="main-content">
                    <div className="cctv-box">
                        <p>CCTV will be placed here</p>
                    </div>
                    <div className="helmet-check">
                        <button onClick={checkHelmet}>Check Helmet</button>
                        {helmetStatus && <p>{helmetStatus}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default HelmetChecker;
