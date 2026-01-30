import React from "react";
import "../App.css";

const EmployeeNew = () => {
  return (
    <>
      <section className="form-card">
        <h2>Employee Details</h2>

        <div className="form-grid">
          <input placeholder="Full Name" />
          <input placeholder="Education" />
          <input type="number" placeholder="Experience (Years)" />
          <input placeholder="Position Applied For" />
          <input placeholder="Location" />
        </div>
      </section>

      <section className="form-card resume-card">
        <h2>Resume Upload</h2>
        <input type="file" />
      </section>

      <button className="primary-btn">Save Employee Candidate</button>
    </>
  );
};

export default EmployeeNew;
