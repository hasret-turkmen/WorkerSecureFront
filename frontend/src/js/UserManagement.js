import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/UserManagement.css';

const UserManagement = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showChangeEmail, setShowChangeEmail] = useState(false);
    const navigate = useNavigate();

    const handleChangePassword = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            console.log("Token:", token);
            console.log("Requesting password change with:", {
                email: localStorage.getItem('email'),
                currentPassword,
                newPassword
            });
            const response = await axios.patch('http://localhost:3000/user/update', {
                email: localStorage.getItem('email'),
                currentPassword,
                newPassword
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("Password change response:", response);
            setMessage(response.data.message);
            if (response.data.message === 'Password updated successfully') {
                // Password değişikliği başarılı, kullanıcıyı login sayfasına yönlendir
                navigate('/login');
            }
        } catch (error) {
            console.error('Error changing password:', error);
            setMessage('Error changing password');
        }
    };

    const handleChangeEmail = async (e) => {
        e.preventDefault();
        const storedEmail = localStorage.getItem('email'); // Email'i localStorage'den alın
        if (!storedEmail) {
            setMessage('Email not found in local storage');
            return;
        }

        try {
            const token = localStorage.getItem('token');
            console.log("Token:", token);
            console.log("Requesting email change with:", {
                email: storedEmail,
                newEmail: newEmail
            });
            const response = await axios.patch('http://localhost:3000/user/update', {
                email: storedEmail,
                newEmail: newEmail
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("Email change response:", response);
            setMessage(response.data.message);
            if (response.data.message === 'Email updated successfully') {
                // Email değişikliği başarılı, kullanıcıyı login sayfasına yönlendir
                navigate('/login');
            }
        } catch (error) {
            console.error('Error changing email:', error);
            setMessage('Error changing email');
        }
    };

    const renderOptions = () => (
        <div className="options-container">
            <h2>What would you like to do?</h2>
            <button className="custom-button" onClick={() => setShowChangePassword(true)}>Change Password</button>
            <button className="custom-button" onClick={() => setShowChangeEmail(true)}>Change Email</button>
            <button className="custom-button" onClick={() => navigate('/welcome')}>Back</button>
        </div>
    );

    const renderChangePassword = () => (
        <div className="form-container">
            <h2>Change Password</h2>
            <form onSubmit={handleChangePassword}>
                <input 
                    type="password" 
                    placeholder="Current password" 
                    value={currentPassword} 
                    onChange={(e) => setCurrentPassword(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="New password" 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} 
                    required 
                />
                <button className="custom-button" type="submit">Change Password</button>
            </form>
            <button className="custom-button" onClick={() => setShowChangePassword(false)}>Back</button>
        </div>
    );

    const renderChangeEmail = () => (
        <div className="form-container">
            <h2>Change Email</h2>
            <form onSubmit={handleChangeEmail}>
                <input 
                    type="email" 
                    placeholder="New Email" 
                    value={newEmail} 
                    onChange={(e) => setNewEmail(e.target.value)} 
                    required 
                />
                <button className="custom-button" type="submit">Change Email</button>
            </form>
            <button className="custom-button" onClick={() => setShowChangeEmail(false)}>Back</button>
        </div>
    );

    return (
        <div className="user-management-container">
            <h1>User Management</h1>
            {!showChangePassword && !showChangeEmail && renderOptions()}
            {showChangePassword && renderChangePassword()}
            {showChangeEmail && renderChangeEmail()}
            {message && <p>{message}</p>}
        </div>
    );
};

export default UserManagement;
