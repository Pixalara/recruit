<<<<<<< HEAD
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "../App.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("hr");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    /* =========================
       1️⃣ CREATE AUTH USER
    ========================= */
    const { data, error } = await supabase.auth.signUp({
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
      alert("Signup failed. Try again.");
      return;
    }

    /* =========================
       2️⃣ CREATE PROFILE ROW
    ========================= */
    const { error: profileError } = await supabase.from("profiles").insert({
      id: data.user.id,
      email: email,
      role: role.toLowerCase(), // admin | hr
    });

    if (profileError) {
      setLoading(false);
      alert("Profile creation failed. Contact admin.");
      return;
    }

    alert("Account created successfully. Please login.");
    navigate("/login");
    setLoading(false);
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('HR');

  const signup = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ email, password, role });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Account created successfully');
>>>>>>> origin/HL-01
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
<<<<<<< HEAD
=======

>>>>>>> origin/HL-01
        {/* LOGO */}
        <img
          src="https://pixalara.com/apple-touch-icon.png"
          alt="PIXA LARA"
          className="logo"
        />

        {/* COMPANY NAME */}
        <h1 className="brand">
          <span className="pix">PIXA</span>
          <span className="lara">LARA</span>
        </h1>

<<<<<<< HEAD
        <h2 style={{ marginBottom: "20px" }}>Sign Up</h2>
=======
        <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>
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

        <select value={role} onChange={e => setRole(e.target.value)}>
<<<<<<< HEAD
          <option value="hr">HR</option>
          <option value="admin">Admin</option>
        </select>

        <button onClick={signup} disabled={loading}>
          {loading ? "Creating..." : "Create Account"}
        </button>

        <p style={{ marginTop: "18px" }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
=======
          <option value="HR">HR</option>
          <option value="Admin">Admin</option>
        </select>

        <button onClick={signup}>Create Account</button>

        <p style={{ marginTop: '18px' }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>

>>>>>>> origin/HL-01
      </div>
    </div>
  );
};

export default Signup;
<<<<<<< HEAD

=======
>>>>>>> origin/HL-01
