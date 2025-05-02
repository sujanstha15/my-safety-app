import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Your Safety, Our Priority</h1>
          <p>Stay informed. Report incidents. Help others stay safe.</p>
          {/* <a href="/alerts" className="hero-button">View Alerts</a> */}
          <Link to="/alerts" className="hero-button">View Alerts</Link> {/* Use Link component */}
        </div>
      </section>
    </div>
  );
};

export default Home;
