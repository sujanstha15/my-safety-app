import React, { useState } from "react";
import "./Report.css";

const Report = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Report submitted:", formData);
    alert("Report submitted successfully!");
    setFormData({ title: "", description: "", location: "" });
  };

  return (
    <div className="report">
      <h2>Report a Safety Concern</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="E.g., Suspicious Activity"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Describe what happened..."
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="E.g., Library entrance"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default Report;
