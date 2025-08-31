import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">RKE LOGO</div>
                
                {/* Desktop Navigation */}
                <nav className="navigation desktop-nav">
                    <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                    <Link to="/" className="nav-link" onClick={closeMenu}>Services</Link>
                    <Link to="/" className="nav-link" onClick={closeMenu}>Products</Link>
                    <Link to="/" className="nav-link" onClick={closeMenu}>Categories</Link>
                </nav>

                {/* Mobile Navigation */}
                <nav className={`navigation mobile-nav ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                    <Link to="/" className="nav-link" onClick={closeMenu}>Services</Link>
                    <Link to="/" className="nav-link" onClick={closeMenu}>Products</Link>
                    <Link to="/" className="nav-link" onClick={closeMenu}>Categories</Link>
                    <Link to="/contact" className="contact-btn mobile-contact-btn" onClick={closeMenu}>Contact us</Link>
                </nav>

                <Link to="/contact" className="contact-btn desktop-contact-btn">Contact us</Link>
                
                {/* Hamburger Menu Button */}
                <button 
                    className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </header>
    );
};

export default Header;
