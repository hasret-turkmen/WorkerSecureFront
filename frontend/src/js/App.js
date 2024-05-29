import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../css/App.css';
import About from './About';
import Developers from './Developers';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import Notifications from './Notifications';
import SignUp from './SignUp';
import UserManagement from './UserManagement';
import Video from './Video';
import Welcome from './Welcome'; // Welcome bileşenini ekleyin

const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/developers" element={<Developers />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user/signup" element={<SignUp />} />
                    <Route path="/video" element={<Video />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/user-management" element={<UserManagement />} /> {/* Changed path to avoid conflict */}
                    <Route path="/welcome" element={<Welcome />} /> {/* Welcome rotasını ekleyin */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
