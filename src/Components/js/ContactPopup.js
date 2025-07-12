// Components/js/ContactPopup.js
import React from 'react';
import '../css/ContactPopup.css';

const ContactPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="contact-popup-overlay">
            <div className="contact-popup">
                <button className="close-btn" onClick={onClose}>×</button>
                <h2>Contact Info</h2>
                <p>📍 Kurnool, Andhra Pradesh, India</p>
                <p>✉️ <a href="mailto:vivekvardhanboreddy@gmail.com">vivekvardhanboreddy@gmail.com</a></p>
                <p>📞 <a href="tel:+919110365970">9110365970</a></p>
            </div>
        </div>
    );
};

export default ContactPopup;
