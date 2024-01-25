import React, { useState } from 'react';
// import './YourComponent.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    dob: '',
    gender: '',
    email: '',
    phoneNumber: '',
    currentGeographicZone: '',
    wishedGeographicZone: '',
    field: '',
    aim:'',
    personality: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);

  };

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="dob">Date of Birth (dd/mm/yyyy):</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Gender:</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
            required
          />
          <label htmlFor="female">Female</label>

          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
            required
          />
          <label htmlFor="male">Male</label>

          <input
            type="radio"
            id="notSpecified"
            name="gender"
            value="notSpecified"
            checked={formData.gender === 'notSpecified'}
            onChange={handleChange}
            required
          />
          <label htmlFor="notSpecified">Not Specified</label>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="currentGeographicZone">Geographic zone (current):</label>
          <select
            id="currentGeographicZone"
            name="currentGeographicZone"
            value={formData.currentGeographicZone}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected></option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="England">England</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Singapore">Singapore</option>
            <option value="Canada">Canada</option>
            <option value="United States of America">United States of America</option>
            {/* Add other options for current geographic zone */}
          </select>
        </div>

        {/* Repeat similar structure for wished geographic zone and field */}

        <div>
          <label htmlFor="wishedGeographicZone">Geographic zone (wished):</label>
          <select
            id="wishedGeographicZone"
            name="wishedGeographicZone"
            value={formData.wishedGeographicZone}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected></option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="England">England</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Singapore">Singapore</option>
            <option value="Canada">Canada</option>
            <option value="United States of America">United States of America</option>
            {/* Add other options for current geographic zone */}
          </select>
        </div>

        <div>
          <label htmlFor="field">Field :</label>
          <select
            id="field"
            name="field"
            value={formData.field}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected></option>
            <option value="Mergers and Acquisition">Mergers and Acquisition</option>
            <option value="Trading">Trading</option>
            <option value="Analyst">Analyst</option>
            <option value="Sales">Sales</option>
            <option value="Private Equity">Private Equity</option>
            <option value="Audit">Audit</option>
            <option value="Consultant">Consultant</option>
            {/* Add other options for current geographic zone */}
          </select>
        </div>

        <div>
          <label htmlFor="aim">What are you looking for ?</label>
          <select
            id="aim"
            name="aim"
            value={formData.aim}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected></option>
            <option value="Interview Advices">Interview Advices</option>
            <option value="Guidance">Guidance</option>
            <option value="General Questions">General Questions</option>
            {/* Add other options for current geographic zone */}
          </select>
        </div>

        <div>
          <label htmlFor="personality">A few words about yourself:</label>
          <input
            type="personality"
            id="personality"
            name="personality"
            value={formData.personality}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button type="submit">
            <Link to="/dashboard-mentor">Register</Link>
            </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
