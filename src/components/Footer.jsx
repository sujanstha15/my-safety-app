import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Campus Safety Watch</p>
    </footer>
  );
};

export default Footer;
