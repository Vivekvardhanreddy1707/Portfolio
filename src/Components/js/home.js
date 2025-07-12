import React from 'react';
import '../css/home.css';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Home() {
    return (
        <div className="home-hero">
            <motion.div
                className="hero-text"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h1>
                    <motion.span
                        initial={{ color: '#1d3b2f' }}
                        animate={{ color: '#006400' }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        Hello,
                    </motion.span>{" "}
                    I'm <span className="highlight">Vivek Vardhan Reddy</span>
                </h1>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    Data Analyst & Tech Enthusiast
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    I turn complex data into actionable insights through analytics, machine learning, and storytelling.
                    Passionate about building intelligent solutions that solve real-world problems.
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <a href="/resume.pdf" download className="btn">
                        <FaDownload /> Resume
                    </a>
                    <a href="/projects" className="btn secondary">
                        View Projects <FaArrowRight />
                    </a>
                </motion.div>
            </motion.div>

            <div className="hero-highlights">
                {[{ count: '6+', label: 'Projects Completed' },
                  { count: '12+', label: 'Tools Mastered' }].map((item, index) => (
                    <motion.div
                        key={index}
                        className="highlight-box"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4 + index * 0.2, duration: 0.5 }}
                    >
                        <h3>{item.count}</h3>
                        <p>{item.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Home;
