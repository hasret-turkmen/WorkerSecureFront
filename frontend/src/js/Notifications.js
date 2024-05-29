import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate hook'unu ekleyin
import '../css/Notifications.css'; // Import the CSS file

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [showAddNotification, setShowAddNotification] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [email, setEmail] = useState('');
    const [info, setInfo] = useState('');
    const [screenshotURI, setScreenshotURI] = useState('');
    const [date, setDate] = useState('');
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

    const addNotification = async (e) => {
        e.preventDefault();
        console.log("addNotification function called");
        try {
            const token = localStorage.getItem('token');
            console.log("Token retrieved from localStorage:", token);
            if (!token) {
                console.error('No token found in localStorage');
                return;
            }
            await axios.post('http://localhost:3000/notifications', 
                { email, info, screenshotURI, date }, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setEmail('');
            setInfo('');
            setScreenshotURI('');
            setDate('');
            setShowAddNotification(false);
            setShowNotifications(false); // Hide notifications after adding a new one
        } catch (error) {
            console.error('Error adding notification', error);
        }
    };

    return (
        <div className="notifications-container">
            <h1>Notifications</h1>
            <div className="options">
                <button 
                    className="custom-button" 
                    onClick={() => {
                        setShowAddNotification(!showAddNotification);
                        if (showNotifications) {
                            setShowNotifications(false);
                        }
                    }}
                >
                    {showAddNotification ? 'Cancel' : 'Add Notification'}
                </button>
                {!showAddNotification && (
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
                )}
                <button 
                    className="custom-button" 
                    onClick={() => navigate('/welcome')} // Back to Welcome butonuna tıklanınca yönlendirin
                >
                    Back to Welcome
                </button>
            </div>
            {showAddNotification && (
                <form className="add-notification" onSubmit={addNotification}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        value={info}
                        onChange={(e) => setInfo(e.target.value)}
                        placeholder="Notification Info"
                    />
                    <input
                        type="text"
                        value={screenshotURI}
                        onChange={(e) => setScreenshotURI(e.target.value)}
                        placeholder="Screenshot URI"
                    />
                    <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Date"
                    />
                    <button className="custom-button" type="submit">Submit</button>
                </form>
            )}
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
