import React, { useState } from "react";
import "../App.css";

const EmployeeAssignment = () => {
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [assignmentDetails, setAssignmentDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      assignmentTitle,
      startDate,
      endDate,
      assignmentDetails,
    };

    console.log("Employee Assignment:", data);
    alert("Employee Assignment Saved!");
  };

  return (
    <div className="form-page">
      {/* TOP HEADING */}
      <h1 className="page-heading">Employee Assignment</h1>

      {/* FORM CARD */}
      <div className="form-card">
        <form className="vertical-form" onSubmit={handleSubmit}>
          
          {/* Assignment Title */}
          <input
            type="text"
            placeholder="Assignment Title"
            value={assignmentTitle}
            onChange={(e) => setAssignmentTitle(e.target.value)}
            required
          />

          {/* Start Date */}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />

          {/* End Date */}
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />

          {/* Assignment Details */}
          <textarea
            placeholder="Assignment Details / Matter"
            value={assignmentDetails}
            onChange={(e) => setAssignmentDetails(e.target.value)}
          />

          {/* SAVE BUTTON */}
          <button type="submit" className="primary-btn">
            Save Assignment
          </button>

        </form>
      </div>
    </div>
  );
};

export default EmployeeAssignment;
