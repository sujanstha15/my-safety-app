import React from 'react';
import './Resources.css';

const Resources = () => {
  return (
    <div className="resources">
      <h1>Important Resources</h1>
      <p>Stay informed and prepared with these essential resources.</p>

      <div className="resources-container">
        <div className="resource-card">
          <h3>Red Cross: Emergency Preparedness</h3>
          <p>Find important emergency preparedness information to stay safe in various situations.</p>
          <a href="https://www.redcross.org" target="_blank" rel="noopener noreferrer" className="resource-button">
            Learn More
          </a>
        </div>

        <div className="resource-card">
          <h3>Weather Alerts</h3>
          <p>Get live weather updates and alerts to help you stay safe during severe weather conditions.</p>
          <a href="https://www.weather.com" target="_blank" rel="noopener noreferrer" className="resource-button">
            Check Alerts
          </a>
        </div>

        <div className="resource-card">
          <h3>CDC: Health & Safety Tips</h3>
          <p>Stay informed about health and safety tips provided by the Centers for Disease Control and Prevention.</p>
          <a href="https://www.cdc.gov" target="_blank" rel="noopener noreferrer" className="resource-button">
            Visit CDC
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;
