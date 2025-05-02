import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Your Safety, Our Priority</h1>
          <p>Stay informed. Report incidents. Help others stay safe.</p>
          <a href="/alerts" className="hero-button">View Alerts</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
