import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/'); 
  };

  return (
    <nav style={navStyle}>
      
      {/* LOGO */}
      <div style={logoStyle}>HMS</div>

      {/* LINKS */}
      <ul style={navLinksStyle}>

        <li>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>

        <li>
          <Link to="/about" style={linkStyle}>About</Link>
        </li>

        {/*  ROLE BASED LINKS */}

        {user?.role === "ADMIN" && (
          <li>
            <Link to="/admin" style={linkStyle}>Admin Dashboard</Link>
          </li>
        )}

        {user?.role === "DOCTOR" && (
          <li>
            <Link to="/doctor" style={linkStyle}>Doctor Panel</Link>
          </li>
        )}

        {user?.role === "PATIENT" && (
          <li>
            <Link to="/patient" style={linkStyle}>My Dashboard</Link>
          </li>
        )}

        {/*  AUTH LINKS */}

        {!user ? (
          <>
            <li>
              <Link to="/login" style={linkStyle}>Login</Link>
            </li>

            <li>
              <Link to="/register" style={linkStyle}>Register</Link>
            </li>
          </>
        ) : (
          <>
            <li style={welcomeStyle}>
              Hi, {user.name}
            </li>

            <li>
              <button onClick={handleLogout} style={logoutBtn}>
                Logout
              </button>
            </li>
          </>
        )}

      </ul>
    </nav>
  );
}

export default Navbar;
//
// STYLES
//

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 30px",
  background: "#0f172a",
  color: "#fff",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const logoStyle = {
  fontSize: "20px",
  fontWeight: "bold",
};

const navLinksStyle = {
  display: "flex",
  alignItems: "center",
  listStyle: "none",
  gap: "20px",
  margin: 0,
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
  fontWeight: "500",
};

const welcomeStyle = {
  color: "#38bdf8",
  fontWeight: "600",
};

const logoutBtn = {
  background: "#ef4444",
  border: "none",
  padding: "8px 14px",
  borderRadius: "6px",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "500",
};