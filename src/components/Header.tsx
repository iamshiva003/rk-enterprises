import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">RKE LOGO</div>
                <nav className="navigation">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#products" className="nav-link">Products</a>
                    <a href="#categories" className="nav-link">Categories</a>
                </nav>
                <button className="contact-btn">Contact us</button>
            </div>
        </header>
    );
};

export default Header;
