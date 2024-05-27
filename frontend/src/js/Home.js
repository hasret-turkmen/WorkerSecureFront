import React from 'react';
import { Link } from 'react-router-dom';
import happyWorker from '../assets/happyWorker.jpg';
import helmet from '../assets/helmet.jpg';
import logo from '../assets/logo.jpg';
import '../css/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <img src={logo} alt="WorkerSecure Logo" className="home-logo" /> {}
                <h1>Welcome to WorkerSecure</h1>
                <p>Create a safer working environment easily!</p>
            </header>
            <main>
                <div className="main-content">
                    <section className="images">
                        <img src={helmet} alt="Helmet Detection" className="image" />
                        <img src={happyWorker} alt="Happy Workers" className="image" />
                    </section>
                    <section className="login-section">
                        <h2>Login</h2>
                        <Link to="/user" className="login-button">Go to Login</Link>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Home;

