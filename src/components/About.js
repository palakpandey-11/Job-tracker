import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h2>About This Job Tracker</h2>
      <p>A Job Tracker is a personal web application that helps users track and manage their job applications during a job search. Instead of using messy spreadsheets or sticky notes, this app provides a neat and centralized interface.This job tracker helps you manage and organize your job applications efficiently.</p>

      <h3>Features</h3>
      <ul>
        <li>Add, edit, and delete job entries</li>
        <li>Track job status like Applied, Interviewing, etc.</li>
        <li>Responsive UI with dashboard view</li>
      </ul>

      <h3>Technologies Used</h3>
      <ul>
        <li>React.js</li>
        <li>HTML5 + CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>LocalStorage for data persistence</li>
      </ul>

      <h3>About the Developer</h3>
      <p>Hi, I'm Palak Pandey — a BCA student and aspiring frontend developer passionate about creating intuitive web apps.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  }
};

export default About;
