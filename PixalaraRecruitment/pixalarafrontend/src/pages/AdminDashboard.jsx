import React from 'react';
import '../App.css';

const AdminDashboard = () => (
  <div className="dashboard">
    <h1>Admin Dashboard</h1>
    <div className="card-grid">
      <div className="card">Total Applicants</div>
      <div className="card">Open Positions</div>
      <div className="card">Pending Approvals</div>
    </div>
  </div>
);

export default AdminDashboard;