import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";

const InternRecruitment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="page-container">
      <h1>Intern Recruitment Process</h1>

      {/* =========================
          🔘 TOP ACTION BUTTONS (ONE LINE)
         ========================= */}
      <div className="top-buttons">
        <button
          className={`tab-btn ${isActive("/intern-recruitment") ? "active" : ""}`}
          onClick={() => navigate("/intern-recruitment")}
        >
          New
        </button>

        <button
          className="tab-btn"
          onClick={() => navigate("/interview-evaluation")}
        >
          Interview Evaluation
        </button>

        <button
          className="tab-btn"
          onClick={() => navigate("/interview-assignment")}
        >
          Interview Assignment
        </button>
      </div>

      {/* =========================
          📊 STATUS BUTTONS (2 ROWS)
         ========================= */}
      <div className="status-buttons">
        <button
          className={`status-btn ${isActive("/intern-candidates") ? "active" : ""}`}
          onClick={() => navigate("/intern-candidates")}
        >
          Candidates
        </button>

        <button
          className={`status-btn ${isActive("/shortlisted") ? "active" : ""}`}
          onClick={() => navigate("/shortlisted")}
        >
          Shortlisted
        </button>

        <button
          className={`status-btn ${isActive("/interviewed") ? "active" : ""}`}
          onClick={() => navigate("/interviewed")}
        >
          Interviewed
        </button>

        <button
          className={`status-btn ${isActive("/selected") ? "active" : ""}`}
          onClick={() => navigate("/selected")}
        >
          Selected
        </button>

        <button
          className={`status-btn ${isActive("/rejected") ? "active" : ""}`}
          onClick={() => navigate("/rejected")}
        >
          Rejected
        </button>
      </div>

      {/* =========================
          👤 INTERN DETAILS
         ========================= */}
      <section className="form-card">
        <h2>Intern Details</h2>

        <div className="form-grid">
          <input placeholder="Full Name" />
          <input placeholder="Education" />
          <input placeholder="Branch" />
          <input placeholder="Institution" />
          <input placeholder="Location" />
          <input placeholder="Passout Year (YYYY)" />
          <input placeholder="Intern Role" />
        </div>
      </section>

      {/* =========================
          📄 RESUME UPLOAD
         ========================= */}
      <section className="form-card">
        <h2>Resume Upload</h2>

        <div className="form-grid">
          <input type="file" accept=".pdf,.doc,.docx" />
          <small style={{ opacity: 0.7 }}>
            Accepted formats: PDF, DOC, DOCX
          </small>
        </div>
      </section>

      <button className="primary-btn">Save Intern</button>
    </div>
  );
};

export default InternRecruitment;
