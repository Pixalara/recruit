import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
<<<<<<< HEAD
import { supabase } from "./supabaseClient";

/* Layout */
import Layout from "./components/Layout";

/* Auth & Home */
=======

/* =========================
   LAYOUT
========================= */
import Layout from "./components/Layout";

/* =========================
   AUTH & HOME
========================= */
>>>>>>> origin/HL-01
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

<<<<<<< HEAD
/* Dashboards */
import AdminDashboard from "./pages/AdminDashboard";
import HRDashboard from "./pages/HRDashboard";

/* Intern */
=======
/* =========================
   DASHBOARDS
========================= */
import AdminDashboard from "./pages/AdminDashboard";
import HRDashboard from "./pages/HRDashboard";

/* =========================
   INTERN RECRUITMENT FLOW
========================= */
>>>>>>> origin/HL-01
import InternRecruitment from "./pages/InternRecruitment";
import InternCandidates from "./pages/InternCandidates";
import Shortlisted from "./pages/Shortlisted";
import Interviewed from "./pages/Interviewed";
import Selected from "./pages/Selected";
import Rejected from "./pages/Rejected";

<<<<<<< HEAD
/* Employee */
=======
/* =========================
   EMPLOYEE RECRUITMENT
========================= */
>>>>>>> origin/HL-01
import EmployeeRecruitment from "./pages/EmployeeRecruitment";
import EmployeeNew from "./pages/EmployeeNew";
import EmployeeCandidates from "./pages/EmployeeCandidates";
import EmployeeShortlisted from "./pages/EmployeeShortlisted";
import EmployeeInterviewed from "./pages/EmployeeInterviewed";
import EmployeeSelected from "./pages/EmployeeSelected";
import EmployeeRejected from "./pages/EmployeeRejected";

<<<<<<< HEAD
/* Interview / Assignment */
=======
/* =========================
   INTERVIEW / ASSIGNMENT
========================= */
>>>>>>> origin/HL-01
import InterviewEvaluation from "./pages/InterviewEvaluation";
import Assignment from "./pages/InternAssignment";
import EmployeeAssignment from "./pages/EmployeeAssignment";

<<<<<<< HEAD
/* Admin */
import AdminCandidates from "./pages/AdminCandidates";
import AdminAuditLogs from "./pages/AdminAuditLogs";

function App() {
  const [theme, setTheme] = useState("dark");
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
=======
function App() {
  const [theme, setTheme] = useState("dark");
>>>>>>> origin/HL-01

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
<<<<<<< HEAD
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const fetchRole = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setUserRole(null);
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      setUserRole(data?.role || null);
      setLoading(false);
    };

    fetchRole();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      fetchRole();
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        <Route element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
          {/* Public */}
=======
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
>>>>>>> origin/HL-01
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

<<<<<<< HEAD
          {/* Admin */}
          <Route
            path="/admin-dashboard"
            element={
              userRole === "admin" ? <AdminDashboard /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/admin-candidates"
            element={
              userRole === "admin" ? <AdminCandidates /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/admin-audit"
            element={
              userRole === "admin" ? <AdminAuditLogs /> : <Navigate to="/login" />
            }
          />

          {/* HR */}
          <Route
            path="/hr-dashboard"
            element={
              userRole === "hr" ? <HRDashboard /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/intern-recruitment"
            element={
              userRole === "hr" ? <InternRecruitment /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/intern-candidates"
            element={
              userRole === "hr" ? <InternCandidates /> : <Navigate to="/login" />
            }
          />
          <Route path="/shortlisted" element={userRole === "hr" ? <Shortlisted /> : <Navigate to="/login" />} />
          <Route path="/interviewed" element={userRole === "hr" ? <Interviewed /> : <Navigate to="/login" />} />
          <Route path="/selected" element={userRole === "hr" ? <Selected /> : <Navigate to="/login" />} />
          <Route path="/rejected" element={userRole === "hr" ? <Rejected /> : <Navigate to="/login" />} />

          <Route
            path="/employee-recruitment"
            element={userRole === "hr" ? <EmployeeRecruitment /> : <Navigate to="/login" />}
          >
=======
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
>>>>>>> origin/HL-01
            <Route index element={<Navigate to="new" replace />} />
            <Route path="new" element={<EmployeeNew />} />
            <Route path="candidates" element={<EmployeeCandidates />} />
            <Route path="shortlisted" element={<EmployeeShortlisted />} />
            <Route path="interviewed" element={<EmployeeInterviewed />} />
            <Route path="selected" element={<EmployeeSelected />} />
            <Route path="rejected" element={<EmployeeRejected />} />
          </Route>

<<<<<<< HEAD
          <Route path="/interview-evaluation" element={userRole === "hr" ? <InterviewEvaluation /> : <Navigate to="/login" />} />
          <Route path="/interview-assignment" element={userRole === "hr" ? <Assignment /> : <Navigate to="/login" />} />
          <Route path="/employee-assignment" element={userRole === "hr" ? <EmployeeAssignment /> : <Navigate to="/login" />} />

          <Route path="*" element={<Navigate to="/" replace />} />
=======
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

>>>>>>> origin/HL-01
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
