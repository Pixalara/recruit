import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const HRDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      {/* PAGE HEADER */}
      <div className="dashboard-header">
        <div>
          <h1>HR Dashboard</h1>
          <p>Manage recruitment pipelines and hiring decisions</p>
        </div>
      </div>

      {/* 🔥 PRIMARY ACTION CARDS */}
      <div className="primary-action-grid">
        <div
          className="primary-action-card intern"
          onClick={() => navigate("/intern-recruitment")}
        >
          <h3>Intern Recruitment</h3>
          <p>Manage intern applications and hiring stages</p>
        </div>

        <div
          className="primary-action-card employee"
          onClick={() => navigate("/employee-recruitment")}
        >
          <h3>Employee Recruitment</h3>
          <p>Manage employee recruitment and interviews</p>
        </div>
      </div>

      {/* 📊 KPI CARDS (No hard-coded numbers) */}
      <div className="kpi-grid secondary">
        <div className="kpi-card">
          <span>Total Candidates</span>
          <h2>—</h2>
        </div>

        <div className="kpi-card success">
          <span>Selected</span>
          <h2>—</h2>
        </div>

        <div className="kpi-card danger">
          <span>Rejected</span>
          <h2>—</h2>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
