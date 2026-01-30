import React from "react";
import "../App.css";

const Rejected = () => {
  return (
    <div className="page-container">
      <h1>Rejected Candidates</h1>

      <div className="form-card" style={{ textAlign: "center" }}>
        <div style={{ fontSize: "42px", marginBottom: "15px" }}>❌</div>

        <p style={{ fontSize: "16px", opacity: 0.85 }}>
          No candidates rejected so far.
        </p>

        <p style={{ fontSize: "14px", opacity: 0.6 }}>
          Rejected candidates will be listed here for record keeping.
        </p>
      </div>
    </div>
  );
};

export default Rejected;
