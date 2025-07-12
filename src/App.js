import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopNav from './Components/js/TopNav';
import SideNavbar from './Components/js/SideNavbar';
import ContactPopup from './Components/js/ContactPopup';
import ScrollToTop from './Components/js/ScrollToTop';
import Home from './Components/js/home';
import Education from './Components/js/Education';
 import Projects from './Components/js/Projects';
import Profile from './Components/js/Profile';

function App() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    const openContact = () => setIsContactOpen(true);
    const closeContact = () => setIsContactOpen(false);

    return (
        <Router>
            <ScrollToTop />
            <TopNav onContactClick={openContact} />
            <SideNavbar />
            <ContactPopup isOpen={isContactOpen} onClose={closeContact} />

            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
