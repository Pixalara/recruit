import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import { supabase } from "./supabaseClient";

/* Layout */
import Layout from "./components/Layout";

/* Auth & Home */
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

/* Dashboards */
import AdminDashboard from "./pages/AdminDashboard";
import HRDashboard from "./pages/HRDashboard";

/* Intern */
import InternRecruitment from "./pages/InternRecruitment";
import InternCandidates from "./pages/InternCandidates";
import Shortlisted from "./pages/Shortlisted";
import Interviewed from "./pages/Interviewed";
import Selected from "./pages/Selected";
import Rejected from "./pages/Rejected";

/* Employee */
import EmployeeRecruitment from "./pages/EmployeeRecruitment";
import EmployeeNew from "./pages/EmployeeNew";
import EmployeeCandidates from "./pages/EmployeeCandidates";
import EmployeeShortlisted from "./pages/EmployeeShortlisted";
import EmployeeInterviewed from "./pages/EmployeeInterviewed";
import EmployeeSelected from "./pages/EmployeeSelected";
import EmployeeRejected from "./pages/EmployeeRejected";

/* Interview / Assignment */
import InterviewEvaluation from "./pages/InterviewEvaluation";
import Assignment from "./pages/InternAssignment";
import EmployeeAssignment from "./pages/EmployeeAssignment";

/* Admin */
import AdminCandidates from "./pages/AdminCandidates";
import AdminAuditLogs from "./pages/AdminAuditLogs";

function App() {
  const [theme, setTheme] = useState("dark");
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

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
            <Route index element={<Navigate to="new" replace />} />
            <Route path="new" element={<EmployeeNew />} />
            <Route path="candidates" element={<EmployeeCandidates />} />
            <Route path="shortlisted" element={<EmployeeShortlisted />} />
            <Route path="interviewed" element={<EmployeeInterviewed />} />
            <Route path="selected" element={<EmployeeSelected />} />
            <Route path="rejected" element={<EmployeeRejected />} />
          </Route>

          <Route path="/interview-evaluation" element={userRole === "hr" ? <InterviewEvaluation /> : <Navigate to="/login" />} />
          <Route path="/interview-assignment" element={userRole === "hr" ? <Assignment /> : <Navigate to="/login" />} />
          <Route path="/employee-assignment" element={userRole === "hr" ? <EmployeeAssignment /> : <Navigate to="/login" />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
