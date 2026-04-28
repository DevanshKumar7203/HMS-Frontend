import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { API } from "../services/authServices";
import {
  Search,
  Stethoscope,
  Mail,
  Clock
} from "lucide-react";

function AdminDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await API.get("/doctors");
      setDoctors(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={mainContent}>
        {/* HEADER */}
        <div style={header}>
          <h2>All Doctors</h2>

          <div style={searchBox}>
            <Search size={18} color="#64748b" />
            <input
              type="text"
              placeholder="Search doctor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={searchInput}
            />
          </div>
        </div>

        {/* EMPTY */}
        {filteredDoctors.length === 0 ? (
          <p style={emptyText}>No doctors found</p>
        ) : (
          <div style={grid}>
            {filteredDoctors.map((doc) => (
              <div
                key={doc._id}
                style={card}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                {/* TOP */}
                <div style={cardTop}>
                  <div style={avatar}>
                    {doc.name?.charAt(0).toUpperCase()}
                  </div>

                  <span style={badge}>Doctor</span>
                </div>

                {/* NAME */}
                <h3 style={{ marginBottom: "6px" }}>{doc.name}</h3>

                {/* INFO */}
                <p style={text}>
                  <Stethoscope size={14} /> {doc.specialization}
                </p>

                <p style={text}>
                  <Clock size={14} /> {doc.experience} years experience
                </p>

                <p style={email}>
                  <Mail size={14} /> {doc.email}
                </p>
              </div>
            ))}
          </div>
        )}
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

const emptyText = {
  color: "#64748b",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: "20px",
};

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
  transition: "all 0.3s ease",
  cursor: "pointer",
};

const cardTop = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "10px",
};

const avatar = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #3b82f6, #6366f1)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
};

const badge = {
  background: "#dbeafe",
  color: "#1e40af",
  padding: "5px 10px",
  borderRadius: "20px",
  fontSize: "12px",
};

const text = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  margin: "4px 0",
  fontSize: "14px",
  color: "#475569",
};

const email = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  marginTop: "8px",
  fontSize: "13px",
  color: "#64748b",
};

export default AdminDoctors;