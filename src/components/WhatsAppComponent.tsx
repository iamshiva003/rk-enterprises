import React, { useState, useRef, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { CONTACT_INFO } from '../config/contact';
import './FloatingContact.css'; // reuse styles

const WhatsAppComponent: React.FC = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedService, setSelectedService] = useState('General Inquiry');
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => setShowOptions((prev) => !prev);

    const handleChat = () => {
        const message = `Hi, I am interested in your "${selectedService}" service. Please assist me.`;
        const url = `https://wa.me/${CONTACT_INFO.phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        setShowOptions(false);
    };

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShowOptions(false);
            }
        };
        if (showOptions) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showOptions]);

    return (
        <div ref={dropdownRef}>
            <button
                className="icon-button whatsapp"
                onClick={toggleDropdown}
                title="Chat on WhatsApp"
            >
                <FaWhatsapp size={24} />
            </button>

            {showOptions && (
                <div className="service-box animate">
                    <select
                        className="service-select"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                    >
                        <option>General Inquiry</option>
                        <option>Product Inquiry</option>
                        <option>Consulting Services</option>
                        <option>Support Request</option>
                        <option>Custom Order</option>
                    </select>
                    <button className="start-chat" onClick={handleChat}>
                        Start Chat
                    </button>
                </div>
            )}
        </div>
    );
};

export default WhatsAppComponent;
