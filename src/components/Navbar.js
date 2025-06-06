import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';


const Navbar = () => {
   const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="navbar">
      <h2 className="logo">Job Tracker</h2>
      <ul className="nav-links">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/add">Add Job</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button onClick={toggleDarkMode}>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
