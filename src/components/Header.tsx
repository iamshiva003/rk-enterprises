import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
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
                    <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
                    <a href="#services" className="nav-link" onClick={closeMenu}>Services</a>
                    <a href="#products" className="nav-link" onClick={closeMenu}>Products</a>
                    <a href="#categories" className="nav-link" onClick={closeMenu}>Categories</a>
                </nav>

                {/* Mobile Navigation */}
                <nav className={`navigation mobile-nav ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
                    <a href="#services" className="nav-link" onClick={closeMenu}>Services</a>
                    <a href="#products" className="nav-link" onClick={closeMenu}>Products</a>
                    <a href="#categories" className="nav-link" onClick={closeMenu}>Categories</a>
                </nav>

                <button className="contact-btn">Contact us</button>
                
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
