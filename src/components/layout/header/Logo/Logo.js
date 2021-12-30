import React from "react";
import './logo.scss';
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="Logo">
      <div className="Logo-Image">
        <img src="./logo.png" alt="Savocks"/>
      </div>
      <div className="Logo-Name">
        <Link to="/">Savocks</Link>
      </div>
    </div>
  )
}

export default Logo;
