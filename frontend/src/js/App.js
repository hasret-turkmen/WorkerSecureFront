import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../css/App.css';
import About from './About';
import Developers from './Developers';
import HelmetChecker from './HelmetChecker';
import Home from './Home';
import Navbar from './Navbar';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/developers" element={<Developers />} />
                    <Route path="/helmet-checker" element={<HelmetChecker />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
