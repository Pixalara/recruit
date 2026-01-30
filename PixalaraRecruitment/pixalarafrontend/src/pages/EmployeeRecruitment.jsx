import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import "../App.css";

const EmployeeRecruitment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname;

  // show header ONLY on /new
  const isNew = path === "/employee-recruitment/new";

  // helper for active status tab
  const isActive = (tab) => path.endsWith(tab);

  return (
    <div className="page-container">

      {/* SHOW HEADER & TABS ONLY ON /new */}
      {isNew && (
        <>
          <h1 className="page-heading">Employee Recruitment</h1>

          {/* =====================
              TOP BUTTONS
          ====================== */}
          <div className="top-tabs">
            <button
              className="top-tab active"
              onClick={() => navigate("/employee-recruitment/new")}
            >
              New
            </button>

            <button
              className="top-tab gradient"
              onClick={() => navigate("/employee-assignment")}
            >
               Assignment
            </button>
          </div>

          {/* =====================
              STATUS TABS
          ====================== */}
          <div className="status-tabs">
            <span
              className={`status-tab ${isActive("candidates") ? "active" : ""}`}
              onClick={() => navigate("/employee-recruitment/candidates")}
            >
              Candidates
            </span>

            <span
              className={`status-tab ${isActive("shortlisted") ? "active" : ""}`}
              onClick={() => navigate("/employee-recruitment/shortlisted")}
            >
              Shortlisted
            </span>

            <span
              className={`status-tab ${isActive("interviewed") ? "active" : ""}`}
              onClick={() => navigate("/employee-recruitment/interviewed")}
            >
              Interviewed
            </span>

            <span
              className={`status-tab ${isActive("selected") ? "active" : ""}`}
              onClick={() => navigate("/employee-recruitment/selected")}
            >
              Selected
            </span>

            <span
              className={`status-tab ${isActive("rejected") ? "active" : ""}`}
              onClick={() => navigate("/employee-recruitment/rejected")}
            >
              Rejected
            </span>
          </div>
        </>
      )}

      {/* =====================
          CHILD ROUTES
      ====================== */}
      <Outlet />
    </div>
  );
};

export default EmployeeRecruitment;
