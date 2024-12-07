import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  </BrowserRouter>
);

const Home = () => <div>Welcome to the Home Page</div>;
const AdminDashboard = () => <div>Welcome to the Admin Dashboard</div>;

export default App;
