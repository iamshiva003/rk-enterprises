import React from 'react';
import WhatsAppButton from './WhatsAppComponent';
import CallButton from './CallComponent';
import './FloatingContact.css';

const FloatingContact: React.FC = () => {
    return (
        <div className="floating-contact-widget">
            <WhatsAppButton />
            <CallButton />
        </div>
    );
};

export default FloatingContact;
