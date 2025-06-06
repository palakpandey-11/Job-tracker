// import logo from './logo.svg';
// import './App.css';
import './css/Jobform.css';
import './css/Navbar.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Jobform from './components/Jobform.js';
import Navbar from './components/Navbar.js';
import Addjob from './components/Addjob.js';
import Dashboard from './components/Dashboard.js';
import Editjob from './components/Editjob.js';
import About from './components/About.js';


function App() {
  return (
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<Addjob />} />
        <Route path="/edit/:id" element={<Editjob />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
   
  );
}

export default App;
