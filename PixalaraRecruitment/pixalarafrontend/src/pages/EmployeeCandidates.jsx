import React, { useState } from "react";
import "../App.css";

const EmployeeCandidates = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="form-page">
      <h1 className="page-heading">Employee Candidates</h1>

      {/* FILTER & SEARCH */}
      <div className="form-card">
        <div className="filter-grid">
          <input
            placeholder="Search by Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select>
            <option>Filter by Role</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>HR</option>
          </select>

          <select>
            <option>Filter by Education</option>
            <option>B.Tech</option>
            <option>M.Tech</option>
            <option>MBA</option>
          </select>

          <select>
            <option>Sort Name A–Z</option>
            <option>Sort Name Z–A</option>
          </select>

          
        </div>
      </div>

      {/* EMPTY STATE */}
      <div className="form-card empty-card">
        <div className="empty-icon">📄</div>
        <p>No employee candidates found</p>
        <p className="empty-sub">
          Employee data will appear once connected to Supabase.
        </p>
      </div>
    </div>
  );
};

export default EmployeeCandidates;
