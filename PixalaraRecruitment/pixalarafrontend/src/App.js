import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

/* =========================
   LAYOUT
========================= */
import Layout from "./components/Layout";

/* =========================
   AUTH & HOME
========================= */
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

/* =========================
   DASHBOARDS
========================= */
import AdminDashboard from "./pages/AdminDashboard";
import HRDashboard from "./pages/HRDashboard";

/* =========================
   INTERN RECRUITMENT FLOW
========================= */
import InternRecruitment from "./pages/InternRecruitment";
import InternCandidates from "./pages/InternCandidates";
import Shortlisted from "./pages/Shortlisted";
import Interviewed from "./pages/Interviewed";
import Selected from "./pages/Selected";
import Rejected from "./pages/Rejected";

/* =========================
   EMPLOYEE RECRUITMENT
========================= */
import EmployeeRecruitment from "./pages/EmployeeRecruitment";
import EmployeeNew from "./pages/EmployeeNew";
import EmployeeCandidates from "./pages/EmployeeCandidates";
import EmployeeShortlisted from "./pages/EmployeeShortlisted";
import EmployeeInterviewed from "./pages/EmployeeInterviewed";
import EmployeeSelected from "./pages/EmployeeSelected";
import EmployeeRejected from "./pages/EmployeeRejected";

/* =========================
   INTERVIEW / ASSIGNMENT
========================= */
import InterviewEvaluation from "./pages/InterviewEvaluation";
import Assignment from "./pages/InternAssignment";
import EmployeeAssignment from "./pages/EmployeeAssignment";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <Routes>
        {/* =========================
            APP LAYOUT (Navbar + Outlet)
        ========================= */}
        <Route element={<Layout theme={theme} toggleTheme={toggleTheme} />}>

          {/* HOME & AUTH */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* DASHBOARDS */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/hr-dashboard" element={<HRDashboard />} />

          {/* INTERN RECRUITMENT */}
          <Route path="/intern-recruitment" element={<InternRecruitment />} />
          <Route path="/intern-candidates" element={<InternCandidates />} />
          <Route path="/shortlisted" element={<Shortlisted />} />
          <Route path="/interviewed" element={<Interviewed />} />
          <Route path="/selected" element={<Selected />} />
          <Route path="/rejected" element={<Rejected />} />

          {/* =========================
              EMPLOYEE RECRUITMENT (NESTED – FIXED)
          ========================= */}
          <Route path="/employee-recruitment" element={<EmployeeRecruitment />}>
            <Route index element={<Navigate to="new" replace />} />
            <Route path="new" element={<EmployeeNew />} />
            <Route path="candidates" element={<EmployeeCandidates />} />
            <Route path="shortlisted" element={<EmployeeShortlisted />} />
            <Route path="interviewed" element={<EmployeeInterviewed />} />
            <Route path="selected" element={<EmployeeSelected />} />
            <Route path="rejected" element={<EmployeeRejected />} />
          </Route>

          {/* INTERVIEW / ASSIGNMENT */}
          <Route
            path="/interview-evaluation"
            element={<InterviewEvaluation />}
          />
          <Route
            path="/interview-assignment"
            element={<Assignment />}
          />
          <Route
            path="/employee-assignment"
            element={<EmployeeAssignment />}
          />

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/hr-dashboard" replace />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
