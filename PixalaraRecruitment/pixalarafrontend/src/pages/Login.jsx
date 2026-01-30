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
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        {/* SAME LOGO IMAGE */}
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

        <h2 style={{ marginBottom: '20px' }}>Login</h2>

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

        <button onClick={login}>Login</button>

        <p style={{ marginTop: '18px' }}>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>

      </div>
    </div>
  );
};

export default Login;