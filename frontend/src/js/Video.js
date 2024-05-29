import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Notifications.css'; // Custom button CSS'ini dahil edin

const Video = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const navigate = useNavigate(); // useNavigate hook'unu ekleyin

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                console.log('Fetching video from http://10.50.11.12:5000/video');
                const response = await axios.get('http://10.50.11.12:5000/video', {
                    responseType: 'blob',
                });
                console.log('Video fetch successful:', response);
                const url = URL.createObjectURL(new Blob([response.data]));
                setVideoUrl(url);
            } catch (error) {
                console.error('Error fetching video:', error);
            }
        };

        fetchVideo();
    }, []);

    return (
        <div>
            <h1>Video Page</h1>
            {videoUrl ? (
                <video width="600" controls>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <p>Loading video...</p>
            )}
            <button className="custom-button" onClick={() => navigate('/welcome')}>Back to Welcome</button>
        </div>
    );
};

export default Video;
