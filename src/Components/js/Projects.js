import React from 'react';
import '../css/projects.css';
import { motion } from 'framer-motion';
import { FaTools, FaCode, FaHashtag } from 'react-icons/fa';

const projects = [
    {
        title: 'Human Following Robot',
        description:
            'An intelligent robot built with Arduino that tracks and follows a person using ultrasonic sensors. Ideal for smart luggage, personal carriers, or shopping assistants.',
        tools: ['Arduino Uno', 'Ultrasonic Sensors', 'Motor Driver', 'DC Motors'],
        languages: ['Arduino C/C++'],
    },
    {
        title: 'MERN Restaurant Management System',
        description:
            'A full-featured web platform with admin and user portals for order management, menus, analytics, and real-time order tracking.',
        tools: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'Tailwind'],
        languages: ['JavaScript', 'HTML5', 'CSS3'],
    },
    {
        title: 'Kohli’s Centuries Analysis in Tableau',
        description:
            'Interactive dashboards built with Tableau that reveal trends and patterns in Virat Kohli’s international cricket centuries.',
        tools: ['Tableau', 'Excel', 'Kaggle', 'Google Sheets'],
        languages: ['SQL', 'Excel Formulas'],
    },
    {
        title: 'Car Listing with GPS Tracking',
        description:
            'A car rental platform with live GPS tracking and admin portal. Shows live location using Google Maps API and Leaflet.',
        tools: ['MongoDB', 'React.js', 'Google Maps API', 'Leaflet', 'Arduino'],
        languages: ['JavaScript', 'C/C++'],
    },
    {
        title: 'Volumetric Analysis App (Flutter + Unity)',
        description:
            'An AR-based mobile app to measure object volume using the camera. Combines Flutter UI with Unity-powered AR engine.',
        tools: ['Flutter', 'Unity', 'AR Foundation', 'Firebase'],
        languages: ['Dart', 'C#', 'ARKit'],
    },
    {
        title: 'Heart Disease Prediction with Deep Learning',
        description:
            'A deep learning model that predicts heart disease risk using health data. Focused on accuracy and model interpretability.',
        tools: ['TensorFlow', 'Keras', 'Pandas', 'Matplotlib'],
        languages: ['Python', 'NumPy'],
    },
];

function Projects() {
    return (
        <div className="projects-page">
            <motion.h1
                className="projects-heading"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Explore <span className="highlight">My Projects</span>
            </motion.h1>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        className="project-card"
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="project-badge">#{index + 1}</div>
                        <h2>{project.title}</h2>
                        <p className="project-desc">{project.description}</p>

                        <div className="project-meta">
                            <div className="project-section">
                                <FaTools className="meta-icon" />
                                {project.tools.map((tool, i) => (
                                    <span key={i} className="chip">{tool}</span>
                                ))}
                            </div>
                            <div className="project-section">
                                <FaCode className="meta-icon" />
                                {project.languages.map((lang, i) => (
                                    <span key={i} className="chip secondary">{lang}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
