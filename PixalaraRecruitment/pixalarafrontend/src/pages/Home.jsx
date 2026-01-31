import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      {/* 🌟 HERO SECTION */}
      <main className="home-hero">
        <div className="hero-badge">Internal Hiring Platform</div>

        <h1>
          Welcome to <br />
          <span>Internal Recruitment</span> <br />
          Management System
        </h1>

        <p>
          Streamline intern and employee hiring with a centralized,
          professional recruitment management system.
        </p>

        <div className="hero-actions">
          <button
            className="primary-btn large"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
