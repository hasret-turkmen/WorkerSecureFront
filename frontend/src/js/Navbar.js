import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
            <Link to="/developers" className={`nav-link ${location.pathname === '/developers' ? 'active' : ''}`}>Our Developers</Link>
            <Link to="/login" className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}>Login</Link>
            <Link to="/user/signup" className={`nav-link ${location.pathname === '/user/signup' ? 'active' : ''}`}>Sign Up</Link>

        </nav>
    );
};

export default Navbar;
