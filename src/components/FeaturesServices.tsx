import React from 'react';
import './FeaturesServices.css';

const FeaturesServices: React.FC = () => {
    return (
        <section className="features-services">
            {/* Features Section */}
            <div className="features-section">
                <h2 className="section-title">Features</h2>
                <p className="section-subtitle">Makes Water Pure through Multiple Purification Process</p>
                
                <div className="features-grid">
                    <div className="feature-panel">
                        <div className="feature-icon">
                            <div className="water-drop-icon">
                                <span className="icon-text">PURITY IN EVERY DROP</span>
                            </div>
                        </div>
                        <h3 className="feature-title">Makes Water Pure</h3>
                        <p className="feature-description">
                            Water Purifiers remove bacteria, viruses, chemicals, and even dissolved impurities such as arsenic, rust, pesticides, and fluorides to make water Pure and healthy that meets drinking water standards.
                        </p>
                    </div>

                    <div className="feature-panel">
                        <div className="feature-icon">
                            <div className="purification-cycle-icon">
                                <div className="cycle-text">
                                    <span className="ro-text">RO</span>
                                    <span className="uv-text">UV</span>
                                    <span className="uf-text">UF</span>
                                </div>
                            </div>
                        </div>
                        <h3 className="feature-title">Multiple Purification Process</h3>
                        <p className="feature-description">
                            RO purification followed by UV and UF purification removes chemicals, pesticides, fluorides, dissolved impurities, kills bacteria & viruses to make water Pure and healthy to drink.
                        </p>
                    </div>

                    <div className="feature-panel">
                        <div className="feature-icon">
                            <div className="test-tube-icon">
                                <div className="splash-effect"></div>
                            </div>
                        </div>
                        <h3 className="feature-title">Removes even Dissolved Impurities</h3>
                        <p className="feature-description">
                            Boiling the water or using conventional purifiers (UV) only kill bacteria and viruses but does not remove dissolved impurities. However, RO Purifiers also remove harmful dissolved impurities removing bacteria and viruses.
                        </p>
                    </div>

                    <div className="feature-panel">
                        <div className="feature-icon">
                            <div className="molecular-icon">
                                <span className="icon-text">RETAINS ESSENTIAL MINERALS</span>
                            </div>
                        </div>
                        <h3 className="feature-title">Retains Essential Minerals</h3>
                        <p className="feature-description">
                            The RO purifier from KENT comes with a TDS control valve. The unique feature allows controlling the desired TDS level to retain essential natural minerals in the purified water.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="services-section">
                <h2 className="section-title">Services</h2>
                <div className="services-list">
                    <span className="service-item">On Site Installation</span>
                    <span className="service-item">Best Price Guaranteed</span>
                    <span className="service-item">Safe and Secure</span>
                    <span className="service-item">Free Delivery</span>
                </div>
            </div>
        </section>
    );
};

export default FeaturesServices;
