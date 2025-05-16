import React from 'react';
import './RenukaProfile.css';

const RenukaProfile = () => {
  return (
    <div className="profile-container">
      <h1>Renuka Nandikolla</h1>
      <p className="contact">📍 Sweden | 📧 renuka1682003@gmail.com | 📞 +46 0760525586</p>

      <section>
        <h2>Summary</h2>
        <p>
          Computer Science graduate and passionate Frontend Developer with expertise in HTML, CSS, JavaScript, TypeScript, React.js, and Python.
          Experienced in building responsive, scalable, and user-friendly web applications. Adept in Agile environments using Git and Jira.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript, TypeScript, React.js, Postman</li>
          <li><strong>Backend:</strong> Python</li>
          <li><strong>Tools:</strong> Git, GitHub, Jira</li>
          <li><strong>Methodologies:</strong> Agile, Scrum</li>
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        <div className="experience">
          <h3>Sita.dev – Frontend Developer</h3>
          <p>Jan 2025 – Present</p>
          <ul>
            <li>Built and maintained responsive React apps using HTML, CSS, JS, and TS</li>
            <li>Improved performance and UX through optimization</li>
            <li>Participated in Agile team rituals and used Git for version control</li>
          </ul>
        </div>
        <div className="experience">
          <h3>I-Ray IT AB – Frontend Developer</h3>
          <p>Mar 2024 – Aug 2024</p>
          <ul>
            <li>Developed responsive interfaces and integrated with backend</li>
            <li>Delivered Resource Tracker app using React.js</li>
          </ul>
        </div>
        <div className="experience">
          <h3>Infosys – Software Developer Intern</h3>
          <p>Mar 2023 – Aug 2023</p>
          <ul>
            <li>Focused on Python development and debugging</li>
            <li>Contributed to scalable Python-based applications</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li><strong>Portfolio Website:</strong> Responsive personal website showcasing skills & projects</li>
          <li><strong>Weather App:</strong> Uses OpenWeather API to show real-time weather</li>
          <li><strong>To-Do List:</strong> Task management with CRUD features</li>
          <li><strong>Calculator:</strong> Interactive basic calculator</li>
          <li><strong>Timer:</strong> Real-time clock display</li>
          <li><strong>AWS Web App:</strong> Deployed multitier app on AWS demonstrating cloud skills</li>
          <li><strong>COVID-19 Simulation:</strong> Markov Chain-based model using Python</li>
          <li><strong>TEXT2IMAGE App:</strong> Flutter + Firebase app to generate images from text prompts</li>
        </ul>
      </section>

      <section>
        <h2>Publication</h2>
        <p><strong>Bachelor Thesis:</strong> Performance Evaluation of ML Models for Sonar-based Mine Detection</p>
        <p><a href="https://www.diva-portal.org/smash/record.jsf?pid=diva2:1881781" target="_blank" rel="noopener noreferrer">View Thesis</a></p>
      </section>

      <section className="links">
        <h2>Links</h2>
        <p><a href="https://myportfoliorenuka.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio Website</a></p>
        <p><a href="https://github.com/Renuma1618/Bachelor-Thesis" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        <p><a href="https://www.linkedin.com/in/renuka-nandikolla-b98a46259" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </section>
    </div>
  );
};

export default RenukaProfile;
