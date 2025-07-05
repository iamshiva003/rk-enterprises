import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { CONTACT_INFO } from '../config/contact';
import './FloatingContact.css'; // reuse styles

const CallComponent: React.FC = () => {
    const handleCall = () => {
        window.location.href = `tel:${CONTACT_INFO.phoneNumber}`;
    };

    return (
        <div className="call-ring-wrapper">
            <span className="ring"></span>
            <button
                className="icon-button call"
                onClick={handleCall}
                title={
                    /Android|iPhone|iPad/i.test(navigator.userAgent)
                        ? 'Tap to Call'
                        : 'Use your phone to call this number'
                }
            >
                <FaPhoneAlt size={20} />
            </button>
        </div>
    );
};

export default CallComponent;
