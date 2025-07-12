// Components/js/TopNav.js
import React from 'react';
import '../css/TopNav.css';

const TopNav = ({ onContactClick }) => {
    return (
        <nav className="top-navbar">
            <div className="navbar-name">Boreddy Vivek Vardhan Reddy</div>
            <button className="contact-button" onClick={onContactClick}>
                Contact Me
            </button>
        </nav>
    );
};

export default TopNav;
