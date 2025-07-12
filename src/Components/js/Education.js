import React from 'react';
import '../css/education.css';
import { motion } from 'framer-motion';

const educationData = [
  {
    title: '10th Standard',
    institution: 'Narayana School, Hyderabad',
    board: 'Telangana Board of Secondary Education',
    year: '2019',
    score: '10 CGPA',
  },
  {
    title: '12th Standard (Intermediate)',
    institution: 'Narayana Junior College, Madhapur, Hyderabad',
    board: 'Telangana Board of Intermediate Education',
    year: '2021',
    score: '90.6%',
  },
  {
    title: 'B.Tech in Computer Science',
    institution: 'Vellore Institute of Technology, Andhra Pradesh',
    board: '',
    specialization: 'Data Analytics',
    year: '2021 - 2025',
  },
];

function Education() {
  return (
    <motion.div
      className="education-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="education-title">
        My <span className="highlight">Education</span>
      </h1>

      <motion.div
        className="education-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            className="edu-card"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <h2>{edu.title}</h2>
            <p><strong>Institution:</strong> {edu.institution}</p>
            {edu.board && <p><strong>Board:</strong> {edu.board}</p>}
            {edu.specialization && (
              <p><strong>Specialization:</strong> {edu.specialization}</p>
            )}
            <p><strong>Year:</strong> {edu.year}</p>
            {edu.score && <p><strong>Score:</strong> {edu.score}</p>}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Education;
