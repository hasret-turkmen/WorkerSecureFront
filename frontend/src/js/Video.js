import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Notifications.css'; // Custom button CSS'ini dahil edin

const Video = () => {
    const navigate = useNavigate(); // useNavigate hook'unu ekleyin

    return (
        <div>
            <h1>Video Page</h1>
            <iframe
                src="http://10.10.223.207:5000/video"
                width="1500"
                height="900"
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <div>
                <button className="custom-button" onClick={() => navigate('/welcome')}>Back to Welcome</button>
            </div>
        </div>
    );
};

export default Video;
