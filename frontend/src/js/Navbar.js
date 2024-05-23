import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css'; // Navbar için CSS dosyasını import edin

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
            <Link to="/developers" className={`nav-link ${location.pathname === '/developers' ? 'active' : ''}`}>Our Developers</Link>
            <Link to="/helmet-checker" className={`nav-link ${location.pathname === '/helmet-checker' ? 'active' : ''}`}>Login</Link>
        </nav>
    );
};

export default Navbar;
