import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobileNavRef = useRef<HTMLElement>(null);
    const hamburgerRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isMenuOpen &&
                mobileNavRef.current &&
                !mobileNavRef.current.contains(event.target as Node) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target as Node)
            ) {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

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
                <nav ref={mobileNavRef} className={`navigation mobile-nav ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                    <Link to="/" className="nav-link" onClick={closeMenu}>Services</Link>
                    <Link to="/" className="nav-link" onClick={closeMenu}>Products</Link>
                    <Link to="/" className="nav-link" onClick={closeMenu}>Categories</Link>
                    <Link to="/contact" className="contact-btn mobile-contact-btn" onClick={closeMenu}>Contact us</Link>
                </nav>

                <Link to="/contact" className="contact-btn desktop-contact-btn">Contact us</Link>
                
                {/* Hamburger Menu Button */}
                <button 
                    ref={hamburgerRef}
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
