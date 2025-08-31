import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                {/* Left Section - Text and Button */}
                <div className="hero-text-section">
                    <h1 className="hero-headline">
                        Your Source for Advanced<br />
                        Water Purification Filter
                    </h1>
                    <p className="hero-tagline">
                        Trusted by millions. The best water purifiers which never compromises on your water quality.
                    </p>
                    <button className="hero-cta-button">
                        Explore Products
                    </button>
                </div>
                
                {/* Right Section - Water Glass Visual */}
                <div className="hero-visual-section">
                    <div className="water-glass-container">
                        <div className="water-glass">
                            <div className="water-fill"></div>
                            <div className="water-pour"></div>
                            <div className="water-splash"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
