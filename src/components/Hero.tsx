import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
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
                
                {/* Right Section - Lottie Animation */}
                <div className="hero-visual-section">
                    <div className="lottie-container">
                        <DotLottieReact
                            src="https://lottie.host/f7d47d74-866b-4e4d-9c13-7150c99bd67b/CFdys3OgMG.lottie"
                            loop
                            autoplay
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
