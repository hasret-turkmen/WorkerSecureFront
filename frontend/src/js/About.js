import React from 'react';
import missionImage from '../assets/cctv-kamera-sistemi.jpg'; // Mission için görseli import edin
import visionImage from '../assets/image-processing-2.jpg'; // Vision için görseli import edin
import '../css/About.css';

const About = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <p>WorkerSecure is a project developed by 4th year Computer Engineering students of Ted University, aiming to address the significant issue of workplace safety both globally and in Turkey.</p>
            </header>
            <main className="about-main">
                <section className="about-section">
                    <div className="about-content">
                        <div className="text-content">
                            <h2>Our Vision</h2>
                            <p>Our project aims to be extended beyond helmet detection to include other workplace safety equipment. By using image processing, we strive to detect workers not wearing helmets from camera frames and send real-time notifications, thus helping to reduce such issues.</p>
                        </div>
                        <img src={visionImage} alt="Vision" className="about-image" />
                    </div>
                </section>
                <section className="about-section">
                    <div className="about-content">
                        <img src={missionImage} alt="Mission" className="about-image" />
                        <div className="text-content">
                            <h2>Our Mission</h2>
                            <p>Our mission is to reduce workplace safety issues by providing real-time alerts for workers not wearing essential safety equipment. With a focus on helmet detection, our project aims to be a comprehensive solution for all safety equipment detection in the future.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default About;
