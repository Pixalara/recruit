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
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

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

        <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>

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
          <option value="HR">HR</option>
          <option value="Admin">Admin</option>
        </select>

        <button onClick={signup}>Create Account</button>

        <p style={{ marginTop: '18px' }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;
