import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HelmetChecker.css';

const Welcome = () => {
    const name = localStorage.getItem('name'); // localStorage'dan adı alın

    return (
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
    );
};

export default Welcome;
