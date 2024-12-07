import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [companyData, setCompanyData] = useState({
    name: '',
    City: '',
    Age: '',
    industry: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/companies', companyData)
      .then(response => {
        console.log('Company added:', response.data);
      })
      .catch(error => {
        console.error('Error adding company:', error);
      });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={companyData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="City"
          placeholder="City"
          value={companyData.City}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="Age"
          placeholder="Age"
          value={companyData.Age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="industry"
          placeholder="Industry"
          value={companyData.industry}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={companyData.contact}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Company</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
