import React, { useEffect, useState } from "react";
import { getPatients } from "../services/hospitalServices";
import Sidebar from "../components/Sidebar";
import {
  Users,
  Activity,
  Mail,
  Phone,
  Search
} from "lucide-react";

function DoctorDashboard() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await getPatients();
      const data = res?.data?.data || [];
      setPatients(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={mainContent}>
        {/* HEADER */}
        <div style={header}>
          <div>
            <h1>Doctor Dashboard</h1>
            <p style={{ color: "#64748b" }}>Welcome back </p>
          </div>

          {/* SEARCH */}
          <div style={searchBox}>
            <Search size={18} color="#64748b" />
            <input
              type="text"
              placeholder="Search patients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={searchInput}
            />
          </div>
        </div>

        {/* STATS */}
        <div style={statsContainer}>
          <div style={card}>
            <Users size={20} />
            <h4>Total Patients</h4>
            <h2>{patients.length}</h2>
          </div>

          <div style={cardLight}>
            <Activity size={20} />
            <h4>Active Cases</h4>
            <h2>{patients.length}</h2>
          </div>
        </div>

        <h2 style={sectionTitle}>Your Patients</h2>

        {/* LOADING */}
        {loading && <p style={loadingText}>Loading patients...</p>}

        {/* EMPTY */}
        {!loading && filteredPatients.length === 0 && (
          <div style={emptyBox}>
            <h3>No patients found</h3>
            <p>Try searching or wait for assignment.</p>
          </div>
        )}

        {/* GRID */}
        <div style={grid}>
          {!loading &&
            filteredPatients.map((p) => (
              <div
                key={p._id}
                style={patientCard}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                {/* AVATAR */}
                <div style={avatar}>
                  {p.name?.charAt(0).toUpperCase()}
                </div>

                <h3>{p.name}</h3>

                <p style={text}>
                  <Mail size={14} /> {p.email || "N/A"}
                </p>

                <p style={text}>
                  <Activity size={14} /> {p.disease || "N/A"}
                </p>

                <p style={text}>
                  <Phone size={14} /> {p.phoneNo || "N/A"}
                </p>

                <span style={badge}>Active</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const mainContent = {
  marginLeft: "240px",
  marginTop: "60px",
  padding: "30px",
  width: "100%",
  minHeight: "100vh",
  background: "#f1f5f9",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const searchBox = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  background: "#fff",
  padding: "8px 12px",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const searchInput = {
  border: "none",
  outline: "none",
  fontSize: "14px",
};

const statsContainer = {
  display: "flex",
  gap: "20px",
  marginBottom: "20px",
};

const card = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  background: "linear-gradient(135deg, #3b82f6, #6366f1)",
  color: "white",
  padding: "20px",
  borderRadius: "14px",
  width: "220px",
};

const cardLight = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  background: "#ffffff",
  padding: "20px",
  borderRadius: "14px",
};

const sectionTitle = {
  marginTop: "10px",
  marginBottom: "10px",
};

const loadingText = {
  color: "#64748b",
};

const emptyBox = {
  padding: "25px",
  background: "#ffffff",
  borderRadius: "12px",
  marginTop: "15px",
  textAlign: "center",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: "20px",
};

const patientCard = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  transition: "all 0.3s ease",
  cursor: "pointer",
};

const avatar = {
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #3b82f6, #6366f1)",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  marginBottom: "10px",
};

const text = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "14px",
  color: "#475569",
  margin: "4px 0",
};

const badge = {
  marginTop: "10px",
  padding: "5px 10px",
  background: "#dcfce7",
  color: "#166534",
  borderRadius: "20px",
  fontSize: "12px",
};

export default DoctorDashboard;