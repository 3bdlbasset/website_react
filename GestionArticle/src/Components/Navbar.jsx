import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css"

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="nav-link">
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
