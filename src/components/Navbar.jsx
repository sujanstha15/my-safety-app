import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">SafeZone</h1>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/alerts" className="nav-link">Alerts</Link>
          <Link to="/resources" className="nav-link">Resources</Link>
          <Link to="/report" className="nav-link">Report</Link>
          <Link to="/watch" className="nav-link">Watch</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
