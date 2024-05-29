import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Notifications.css'; // Import the CSS file

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);
    const navigate = useNavigate(); // useNavigate hook'unu kullanın

    const fetchNotifications = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log("Token retrieved from localStorage:", token);
            if (!token) {
                console.error('No token found in localStorage');
                return;
            }
            const response = await axios.get('http://localhost:3000/notifications', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setNotifications(response.data.notifications);
            setShowNotifications(true);
        } catch (error) {
            console.error('Error fetching notifications', error);
        }
    };

    return (
        <div className="notifications-container">
            <h1>Notifications</h1>
            <div className="button-group">
                <button 
                    className="custom-button" 
                    onClick={() => {
                        if (!showNotifications) {
                            fetchNotifications();
                        } else {
                            setShowNotifications(false);
                        }
                    }}
                >
                    {showNotifications ? 'Cancel' : 'My Notifications'}
                </button>
                <button 
                    className="custom-button" 
                    onClick={() => navigate('/welcome')} // Back to Welcome butonuna tıklanınca yönlendirin
                >
                    Back to Welcome
                </button>
            </div>
            {showNotifications && (
                <div className="notifications-list">
                    {notifications.map((notification, index) => (
                        <div key={index} className="notification">
                            <p>Email: {notification.email}</p>
                            <p>Info: {notification.info}</p>
                            <p>Screenshot URI: {notification.screenshotURI}</p>
                            <p>Date: {notification.date}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Notifications;
