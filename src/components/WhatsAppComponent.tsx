import React, { useState, useRef, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { CONTACT_INFO } from '../config/contact';
import './FloatingContact.css'; // reuse styles

interface ServiceOption {
    value: string;
    label: string;
}

const serviceOptions: ServiceOption[] = [
    { value: 'General Inquiry', label: 'General Inquiry' },
    { value: 'Product Inquiry', label: 'Product Inquiry' },
    { value: 'Consulting Services', label: 'Consulting Services' },
    { value: 'Support Request', label: 'Support Request' },
    { value: 'Custom Order', label: 'Custom Order' }
];

const WhatsAppComponent: React.FC = (): React.JSX.Element => {
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [selectedService, setSelectedService] = useState<string>('General Inquiry');
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = (): void => setShowOptions((prev: boolean) => !prev);

    const handleChat = (): void => {
        const message: string = `Hi, I am interested in your "${selectedService}" service. Please assist me.`;
        const url: string = `https://wa.me/${CONTACT_INFO.phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        setShowOptions(false);
    };

    // Close on outside click
    useEffect((): (() => void) => {
        const handleClickOutside = (e: MouseEvent): void => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShowOptions(false);
            }
        };
        if (showOptions) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return (): void => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showOptions]);

    const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedService(e.target.value);
    };

    return (
        <div ref={dropdownRef}>
            <button
                className="icon-button whatsapp"
                onClick={toggleDropdown}
                title="Chat on WhatsApp"
                type="button"
            >
                <FaWhatsapp size={24} />
            </button>

            {showOptions && (
                <div className="service-box animate">
                    <select
                        className="service-select"
                        value={selectedService}
                        onChange={handleServiceChange}
                    >
                        {serviceOptions.map((option: ServiceOption) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <button className="start-chat" onClick={handleChat} type="button">
                        Start Chat
                    </button>
                </div>
            )}
        </div>
    );
};

export default WhatsAppComponent;
