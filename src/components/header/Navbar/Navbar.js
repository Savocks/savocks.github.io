import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="Navbar">
      <span className="Navbar-Link">
        <Link to="/about-me">About Me</Link>
      </span>
      <span className="Navbar-Link">
        <Link to="/projects">Projects</Link>
      </span>
      <span className="Navbar-Link">
        <Link to="/contacts">Contact Me</Link>
      </span>
    </nav>
  );
}

export default Navbar;
