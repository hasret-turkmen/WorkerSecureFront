import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Notifications.css'; // Custom button CSS'ini dahil edin

const UserManagement = () => {
    const navigate = useNavigate(); // useNavigate hook'unu ekleyin

    return (
        <div>
            <h1>User Management Page</h1>
            <button className="custom-button" onClick={() => navigate('/welcome')}>Back to Welcome</button>
        </div>
    );
};

export default UserManagement;
