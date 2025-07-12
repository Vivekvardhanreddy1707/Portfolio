// Profile.jsx
import React from 'react';
import '../css/profile.css';
import profilePic from '../img/ProfilePhoto.jpg'; // Adjust path accordingly

const skills = [
  { name: 'Java', level: 90 },
  { name: 'SQL', level: 95 },
  { name: 'HTML, CSS', level: 85 },
  { name: 'Tableau', level: 75 },
  { name: 'React.js', level: 70 },
];

const tools = ['Pandas', 'NumPy', 'Power BI', 'Git', 'MongoDB', 'VS Code', 'Firebase', 'Tailwind CSS','Hadoop','Futter', 'Unity', 'Arduino'];

const softSkills = ['Problem Solving', 'Teamwork', 'Communication', 'Adaptability', 'Critical Thinking'];

const languages = ['English', 'Telugu', 'Hindi'];

const certifications = [
  { title: 'Data Visualization: Empowering Business with Effective Insights', provider: 'Accenture' },
  { title: 'Data Analytics and Visualization Job Simulation', provider: 'Tata' },
  { title: 'NERD+ (DSA using Java)', provider: 'Neo' },
  { title: 'SmartInternz Externship Certificate', provider: 'SmartInternz' },
  { title: 'Ethunus MERN FULL STACK internship', provider: 'Ethunus' },
];

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={profilePic} alt="Profile" className="profile-image" />
        <div>
          <h1>Vivek Vardhan Reddy</h1>
          <h3>Data Analyst | Tech Enthusiast</h3>
          <p>Passionate about solving problems through data and building tech-driven solutions.</p>
        </div>
      </div>

      <div className="section">
        <h2>About Me</h2>
        <p>
          🚀 Aspiring Data Analyst | VIT-AP Graduate | Insight-Driven Innovator <br />
          I’m a results-oriented B.Tech graduate from Vellore Institute of Technology, Andhra Pradesh, specialized in Data Analytics.
          With a solid background in statistics, visualization, and machine learning, I love turning raw data into actionable strategies.
          <br /><br />
          💡 Whether it's solving complex problems, uncovering trends, or optimizing decisions — I bring a curious mind and a love for data-driven solutions.
          <br /><br />
          📊 Turning numbers into narratives. Data into decisions. Curiosity into impact.
        </p>
      </div>

      <div className="section">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, i) => (
            <div key={i} className="skill-bar">
              <span>{skill.name}</span>
              <div className="bar">
                <div
                  className="filled"
                  style={{ '--skill-level': `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Tools I Know</h2>
        <div className="chips">
          {tools.map((tool, i) => (
            <span key={i} className="chip">{tool}</span>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Languages Known</h2>
        <div className="chips">
          {languages.map((lang, i) => (
            <span key={i} className="chip secondary">{lang}</span>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Soft Skills</h2>
        <div className="chips">
          {softSkills.map((skill, i) => (
            <span key={i} className="chip">{skill}</span>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Certifications</h2>
        <ul className="certifications-list">
          {certifications.map((cert, i) => (
            <li key={i}>
              <strong>{cert.title}</strong> <span>– {cert.provider}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="section center">
        <a href="/resume.pdf" download className="btn">📥 Download Resume</a>
      </div>
    </div>
  );
}

export default Profile;
