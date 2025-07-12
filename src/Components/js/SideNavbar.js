// Components/js/SideNavbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SideNavbar.css';
import { FaHome, FaUserGraduate, FaProjectDiagram, FaUser } from 'react-icons/fa';

const SideNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="side-navbar">
      <div className="nav-icon" title="Home" onClick={() => navigate('/')}>
        <FaHome />
      </div>
      <div className="nav-icon" title="Education" onClick={() => navigate('/education')}>
        <FaUserGraduate />
      </div>
      <div className="nav-icon" title="Projects" onClick={() => navigate('/projects')}>
        <FaProjectDiagram />
      </div>
      <div className="nav-icon" title="Profile" onClick={() => navigate('/profile')}>
        <FaUser />
      </div>
    </div>
  );
};

export default SideNavbar;
