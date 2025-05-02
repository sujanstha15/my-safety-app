import React from "react";
import "./Alerts.css";

const Alerts = () => {
  const alertData = [
    {
      title: "Suspicious Activity Reported",
      description: "A suspicious individual was seen near the campus library around 9 PM.",
      time: "April 18, 2025 - 9:00 PM"
    },
    {
      title: "Power Outage in Dorm A",
      description: "There has been a temporary power outage in Dorm A. Technicians are working on it.",
      time: "April 17, 2025 - 6:30 PM"
    },
    {
      title: "Lost Wallet",
      description: "A black leather wallet was found near the cafeteria. Contact security to claim.",
      time: "April 16, 2025 - 12:00 PM"
    }
  ];

  return (
    <div className="alerts">
      <h2>Recent Safety Alerts</h2>
      <div className="alert-list">
        {alertData.map((alert, index) => (
          <div className="alert-card" key={index}>
            <h3>{alert.title}</h3>
            <p>{alert.description}</p>
            <small>{alert.time}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;
