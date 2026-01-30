import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar({ theme, toggleTheme }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login", { replace: true });
  };

  // ❌ hide back button only on main entry pages
  const hideBack =
    location.pathname === "/" ||
    location.pathname === "/hr-dashboard" ||
    location.pathname === "/admin-dashboard";

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-left">
        {!hideBack && (
          <button
            className="back-btn"
            onClick={() => navigate(-1)}
            aria-label="Go Back"
          >
            ←
          </button>
        )}

        <img
          src="https://pixalara.com/apple-touch-icon.png"
          alt="Pixalara Logo"
          className="logo-img"
        />
        <span className="logo-text">Pixalara</span>
      </div>

      <div className="navbar-right">
        <div className="theme-toggle" onClick={toggleTheme}>
          Theme
          <div className={`toggle-switch ${theme === "light" ? "on" : ""}`} />
        </div>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="signup-btn">
              Sign Up
            </Link>
          </>
        ) : (
          <button onClick={handleLogout} className="signup-btn">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
