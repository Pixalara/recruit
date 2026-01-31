<<<<<<< HEAD
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);

    /* =========================
       1️⃣ SUPABASE AUTH LOGIN
    ========================= */
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoading(false);
      alert(error.message);
      return;
    }

    if (!data?.user) {
      setLoading(false);
      alert("Login failed. Please try again.");
      return;
    }

    /* =========================
       2️⃣ FETCH USER ROLE
    ========================= */
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    if (profileError || !profile) {
      setLoading(false);
      alert("User profile not found. Contact admin.");
      return;
    }

    if (!profile.role) {
      setLoading(false);
      alert("Role not assigned. Contact admin.");
      return;
    }

    /* =========================
       3️⃣ ROLE-BASED REDIRECT
    ========================= */
    if (profile.role === "admin") {
      navigate("/admin-dashboard");
    } else if (profile.role === "hr") {
      navigate("/hr-dashboard");
    } else {
      alert("Invalid role configuration");
    }

    setLoading(false);
=======
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) return alert('Invalid email or password');

    if (user.role === 'Admin') navigate('/admin-dashboard');
    else if (user.role === 'HR') navigate('/hr-dashboard');
>>>>>>> origin/HL-01
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
<<<<<<< HEAD
        {/* LOGO */}
=======

        {/* SAME LOGO IMAGE */}
>>>>>>> origin/HL-01
        <img
          src="https://pixalara.com/apple-touch-icon.png"
          alt="PIXA LARA"
          className="logo"
        />

<<<<<<< HEAD
        {/* BRAND */}
=======
        {/* COMPANY NAME */}
>>>>>>> origin/HL-01
        <h1 className="brand">
          <span className="pix">PIXA</span>
          <span className="lara">LARA</span>
        </h1>

<<<<<<< HEAD
        <h2 style={{ marginBottom: "20px" }}>Login</h2>
=======
        <h2 style={{ marginBottom: '20px' }}>Login</h2>
>>>>>>> origin/HL-01

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

<<<<<<< HEAD
        <button onClick={login} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p style={{ marginTop: "18px" }}>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
=======
        <button onClick={login}>Login</button>

        <p style={{ marginTop: '18px' }}>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>

>>>>>>> origin/HL-01
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Login;


=======
export default Login;
>>>>>>> origin/HL-01
