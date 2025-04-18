import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🩺 HealthPortal</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-cta">
        <Link to="/book" className="book-btn">Book Appointment</Link>
      </div>
    </nav>
  );
}

export default Navbar;