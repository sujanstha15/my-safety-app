import React, { useState } from 'react';
import './Watch.css';

const Watch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      // Simulate successful volunteer sign-up
      setSuccessMessage('Thank you for signing up! We will contact you soon.');
      setErrorMessage('');
      setFormData({
        name: '',
        email: '',
        phone: '',
      });
    } else {
      setErrorMessage('Please fill in all the fields.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="watch">
      <h1>Neighborhood Watch Program</h1>
      <p>Join the neighborhood watch program to help ensure the safety of your community!</p>

      <section className="volunteer">
        <h2>Volunteer Sign-Up</h2>
        <form onSubmit={handleSubmit}>
          {successMessage && <div className="success-message">{successMessage}</div>}
          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Join the Watch</button>
        </form>
      </section>

      <section className="events">
        <h2>Upcoming Events</h2>
        <ul>
          <li><strong>Next Meeting:</strong> June 15, 2024</li>
          <li><strong>Block Captain Training:</strong> July 1, 2024</li>
        </ul>
      </section>
    </div>
  );
};

export default Watch;
