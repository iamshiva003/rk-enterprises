import { FaMapMarkerAlt, FaPhone, FaGlobe, FaEnvelope } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted');
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <h1 className="contact-title">Contact Us</h1>
                
                <div className="contact-content">
                    {/* Left Column - Contact Information */}
                    <div className="contact-info">
                        <div className="info-item">
                            <div className="info-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="info-content">
                                <h3>Address :</h3>
                                <p>Head Office: 8th floor, Head office, JMD MEGAPOLIS, Unit No 831, Sector 48, Bangalore 560002</p>
                            </div>
                        </div>
                        
                        {/* Google Maps */}
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14200.229471768782!2d77.69781238823431!3d12.914804701562934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12352583263b%3A0x758c19747cfaa2b0!2sGlobal%20Water%20Solution%20(GWSRO)!5e0!3m2!1sen!2sus!4v1756646817719!5m2!1sen!2sus"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="RKE Enterprises Location"
                            ></iframe>
                        </div>
                        
                        <div className="info-item">
                            <div className="info-icon">
                                <FaPhone />
                            </div>
                            <div className="info-content">
                                <h3>Business Phone Number :</h3>
                                <p>+91-1928298383</p>
                                <p>+91-1928298383</p>
                            </div>
                        </div>
                        
                        <div className="info-item">
                            <div className="info-icon">
                                <FaGlobe />
                            </div>
                            <div className="info-content">
                                <h3>Website :</h3>
                                <p>https://rkenterprisesblr.com/</p>
                            </div>
                        </div>
                        
                        <div className="info-item">
                            <div className="info-icon">
                                <FaEnvelope />
                            </div>
                            <div className="info-content">
                                <h3>Email :</h3>
                                <p>info@ekenterprisesblr.com</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Column - Contact Form */}
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Name" 
                                    className="form-input"
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Email" 
                                    className="form-input"
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="subject"
                                    placeholder="Subject" 
                                    className="form-input"
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <textarea 
                                    name="message"
                                    placeholder="Message" 
                                    className="form-textarea"
                                    rows={5}
                                    required
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="send-button">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;