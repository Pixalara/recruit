<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "../App.css";

const AdminDashboard = ({ isDarkMode }) => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    total: 0,
    intern: 0,
    employee: 0,
    selected: 0,
    rejected: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const { data, error } = await supabase
      .from("candidates")
      .select("type, status");

    if (error) {
      console.error(error.message);
      return;
    }

    const rows = data || [];

    setStats({
      total: rows.length,
      intern: rows.filter((c) => c.type === "intern").length,
      employee: rows.filter((c) => c.type === "employee").length,
      selected: rows.filter((c) => c.status === "Selected").length,
      rejected: rows.filter((c) => c.status === "Rejected").length,
    });
  };

  return (
    <div className={`dashboard-page ${isDarkMode ? "dark" : ""}`}>
      
      {/* HEADER */}
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </div>

      {/* KPI SECTION */}
      <div className="kpi-grid">

        <div className="kpi-card">
          <div className="card-header">
            <span>Total Candidates</span>
          </div>
          <h2>{stats.total}</h2>
        </div>

        <div className="kpi-card">
          <div className="card-header">
            <span>Intern Candidates</span>
          </div>
          <h2>{stats.intern}</h2>
        </div>

        <div className="kpi-card">
          <div className="card-header">
            <span>Employee Candidates</span>
          </div>
          <h2>{stats.employee}</h2>
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

      {/* ADMIN PIPELINES */}
      <div className="section">
        <div className="pipeline-grid">

          <div
            className="pipeline-card"
            onClick={() => navigate("/admin/candidates")}
          >
            <h4>All Candidates</h4>
            <p>View and manage all recruitment data</p>
          </div>

          <div
            className="pipeline-card"
            onClick={() => navigate("/admin/create-hr")}
          >
            <h4>Create HR User</h4>
            <p>Add HR members with role-based access</p>
          </div>

          <div
            className="pipeline-card"
            onClick={() => navigate("/admin/audit-logs")}
          >
            <h4>Audit Logs</h4>
            <p>Track system activities and updates</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;

=======
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
>>>>>>> origin/HL-01
