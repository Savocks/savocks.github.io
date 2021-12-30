import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink className="Navbar-Link" to="/">
        Home
      </NavLink>
      <NavLink className="Navbar-Link" to="/about-me">
        About Me
      </NavLink>
      <NavLink className="Navbar-Link" to="/projects">
        Projects
      </NavLink>
      <NavLink className="Navbar-Link" to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
}

export default Navbar;
