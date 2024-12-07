import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/companies')
      .then(response => setCompanies(response.data))
      .catch(error => console.error('Error fetching companies:', error));
  }, []);

  return (
    <div>
      <h1>Companies</h1>
      <ul>
        {companies.map(company => (
          <li key={company._id}>{company.name} - {company.industry}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
