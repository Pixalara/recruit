import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const HRDashboard = ({ isDarkMode }) => {
  const navigate = useNavigate();
  
  const [stats, setStats] = useState({
    total: 0,
    inReview: 0,
    selected: 0,
    rejected: 0,
  });

  return (
    <div className={`dashboard-page ${isDarkMode ? "dark" : ""}`}>
      {/* HEADER */}
      <div className="dashboard-header">
        <h1>HR Dashboard</h1>
        
      </div>

      {/* KPI SECTION */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="card-header">
            <span>Total Applications</span>
          </div>
          <h2>{stats.total}</h2>
        </div>
        
        <div className="kpi-card">
          <div className="card-header">
            <span>In Review</span>
          </div>
          <h2>{stats.inReview}</h2>
        </div>
        
        <div className="kpi-card success">
          <div className="card-header">
            <span>Selected</span>
          </div>
          <h2>{stats.selected}</h2>
        </div>
        
        <div className="kpi-card danger">
          <div className="card-header">
            <span>Rejected</span>
          </div>
          <h2>{stats.rejected}</h2>
        </div>
      </div>

      {/* PIPELINES */}
      <div className="section">
        <div className="pipeline-grid">
          <div className="pipeline-card" onClick={() => navigate("/intern-recruitment")}>
            <h4>Intern Recruitment</h4>
            <p>Manage intern applications and stages</p>
          </div>

          <div className="pipeline-card" onClick={() => navigate("/employee-recruitment")}>
            <h4>Employee Recruitment</h4>
            <p>Manage employee hiring and interviews</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default HRDashboard;