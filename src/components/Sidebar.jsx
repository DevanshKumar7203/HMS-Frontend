import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  LayoutDashboard,
  Users,
  User,
  PlusCircle,
  Home
} from "lucide-react";

function Sidebar() {
  const { user } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div style={sidebar}>
      
 
      <div>
        {/* LOGO */}
        <div style={logoSection}>
          <span style={roleBadge}>{user?.role}</span>
        </div>

        {/* MENU */}
        <div style={menu}>

          {/* ADMIN */}
          {user?.role === "ADMIN" && (
            <>
              <NavItem to="/admin" label="Dashboard" icon={<LayoutDashboard size={18} />} active={isActive("/admin")} />
              <NavItem to="/admin/doctors" label="Doctors" icon={<User size={18} />} active={isActive("/admin/doctors")} />
              <NavItem to="/admin/patients" label="Patients" icon={<Users size={18} />} active={isActive("/admin/patients")} />
              <NavItem to="/admin/create-doctor" label="Add Doctor" icon={<PlusCircle size={18} />} active={isActive("/admin/create-doctor")} />
              <NavItem to="/admin/create-patient" label="Add Patient" icon={<PlusCircle size={18} />} active={isActive("/admin/create-patient")} />
            </>
          )}

          {/* DOCTOR */}
          {user?.role === "DOCTOR" && (
            <>
              <NavItem to="/doctor" label="Dashboard" icon={<LayoutDashboard size={18} />} active={isActive("/doctor")} />
              <NavItem to="/doctor/patients" label="My Patients" icon={<Users size={18} />} active={isActive("/doctor/patients")} />
            </>
          )}

          {/* PATIENT */}
          {user?.role === "PATIENT" && (
            <>
              <NavItem to="/patient" label="My Dashboard" icon={<Home size={18} />} active={isActive("/patient")} />
            </>
          )}

        </div>
      </div>

      {/* FOOTER */}
      <div style={footer}>
        <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
          Logged in as
        </p>
        <strong style={{ fontSize: "14px" }}>
          {user?.name || "User"}
        </strong>
      </div>
    </div>
  );
}

/* NAV ITEM */
function NavItem({ to, label, icon, active }) {
  return (
    <Link
      to={to}
      style={{
        ...navItem,
        background: active ? "#3b82f6" : "transparent",
        color: active ? "#fff" : "#cbd5f5",
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.background = "#1e293b";
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.background = "transparent";
      }}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

/* ================= STYLES ================= */

const sidebar = {
  width: "240px",
  height: "calc(100vh - 60px)",
  background: "#0f172a",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "fixed",
  top: "60px",
  left: 0,
  overflowY: "auto",
};

const logoSection = {
  marginBottom: "25px",
};

const roleBadge = {
  display: "inline-block",
  marginTop: "6px",
  padding: "4px 10px",
  fontSize: "11px",
  borderRadius: "20px",
  background: "#1e293b",
  color: "#38bdf8",
};

const menu = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const navItem = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "10px 12px",
  borderRadius: "10px",
  textDecoration: "none",
  fontSize: "14px",
  transition: "all 0.2s ease",
};

const footer = {
  borderTop: "1px solid #1e293b",
  paddingTop: "12px",
};

export default Sidebar;