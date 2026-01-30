import React from "react";
import "../App.css";

const EmployeeInterviewed = () => {
  return (
    <div className="form-page">
      <h1 className="page-heading">Interviewed Employees</h1>

      <div className="form-card">
        <div className="filter-grid">
          <input placeholder="Search by Name" />

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

      <div className="form-card empty-card">
        <div className="empty-icon">📄</div>
        <p>No interviewed employees</p>
        <p className="empty-sub">
          Interviewed employees will appear here.
        </p>
      </div>
    </div>
  );
};

export default EmployeeInterviewed;
