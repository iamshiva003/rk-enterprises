import React from 'react';
import './FeaturesServices.css';
import WaterPureIcon from '../assets/icons/water-pure-icon.svg';
import MultiplePurificationIcon from '../assets/icons/multiple-purification-icon.svg';
import DissolvedImpuritiesIcon from '../assets/icons/dissolved-impurities-icon.svg';
import EssentialMineralsIcon from '../assets/icons/essential-minerals-icon.svg';

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
                            <img src={WaterPureIcon} alt="Makes Water Pure" width="90" height="90" />
                        </div>
                        <h3 className="feature-title">Makes Water Pure</h3>
                        <p className="feature-description">
                            Water Purifiers remove bacteria, viruses, chemicals, and even dissolved impurities such as arsenic, rust, pesticides, and fluorides to make water Pure and healthy that meets drinking water standards.
                        </p>
                    </div>

                    <div className="feature-panel">
                        <div className="feature-icon">
                            <img src={MultiplePurificationIcon} alt="Multiple Purification Process" width="90" height="90" />
                        </div>
                        <h3 className="feature-title">Multiple Purification Process</h3>
                        <p className="feature-description">
                            RO purification followed by UV and UF purification removes chemicals, pesticides, fluorides, dissolved impurities, kills bacteria & viruses to make water Pure and healthy to drink.
                        </p>
                    </div>

                    <div className="feature-panel">
                        <div className="feature-icon">
                            <img src={DissolvedImpuritiesIcon} alt="Removes even Dissolved Impurities" width="90" height="90" />
                        </div>
                        <h3 className="feature-title">Removes even Dissolved Impurities</h3>
                        <p className="feature-description">
                            Boiling the water or using conventional purifiers (UV) only kill bacteria and viruses but does not remove dissolved impurities. However, RO Purifiers also remove harmful dissolved impurities removing bacteria and viruses.
                        </p>
                    </div>

                    <div className="feature-panel">
                        <div className="feature-icon">
                            <img src={EssentialMineralsIcon} alt="Retains Essential Minerals" width="90" height="90" />
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
