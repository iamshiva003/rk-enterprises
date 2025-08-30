import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Leftmost Column - Branding and Copyright */}
                <div className="footer-column">
                    <div className="brand-logo">RKE LOGO</div>
                    <div className="copyright-info">
                        <p>© 2025 water purifications and softners</p>
                        <p>All Rights Reserved</p>
                    </div>
                    <div className="social-icons">
                        <a href="#" className="social-icon" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="#" className="social-icon" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="#" className="social-icon" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="#" className="social-icon" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="social-icon" aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                {/* Second Column - Company Links */}
                <div className="footer-column">
                    <h3 className="column-title">Company</h3>
                    <ul className="footer-links">
                        <li><a href="#about">ABOUT US</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <li><a href="#careers">CAREERS</a></li>
                        <li><a href="#partner">PARTNER WITH US</a></li>
                    </ul>
                </div>

                {/* Third Column - Social Links */}
                <div className="footer-column">
                    <h3 className="column-title">Social</h3>
                    <ul className="footer-links">
                        <li><a href="#instagram">INSTAGRAM</a></li>
                        <li><a href="#facebook">FACEBOOK</a></li>
                        <li><a href="#linkedin">LINKEDIN</a></li>
                        <li><a href="#twitter">TWITTER</a></li>
                    </ul>
                </div>

                {/* Rightmost Column - Privacy & Terms */}
                <div className="footer-column">
                    <h3 className="column-title">Privacy & Terms</h3>
                    <ul className="footer-links">
                        <li><a href="#faq">FAQ'S</a></li>
                        <li><a href="#privacy">PRIVACY POLICY</a></li>
                        <li><a href="#terms">TERMS OF SERVICE</a></li>
                        <li><a href="#cancellation">CANCELLATION POLICY</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
