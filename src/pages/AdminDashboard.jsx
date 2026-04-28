import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { API } from "../services/authServices";

function AdminDashboard() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const pRes = await API.get("/patients");
      setPatients(pRes.data.data);

      const dRes = await API.get("/doctors");
      setDoctors(dRes.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={mainContent}>
        {/* HEADER */}
        <div style={header}>
          <h2>Admin Dashboard </h2>
          <p style={{ color: "#64748b" }}>Overview of system data</p>
        </div>

        {/* STATS */}
        <div style={statsGrid}>
          <div style={{ ...statCard, background: "linear-gradient(135deg, #3b82f6, #6366f1)" }}>
            <h1>{doctors.length}</h1>
            <p>Doctors</p>
          </div>

          <div style={{ ...statCard, background: "linear-gradient(135deg, #22c55e, #16a34a)" }}>
            <h1>{patients.length}</h1>
            <p>Patients</p>
          </div>
        </div>

        {/* DOCTORS */}
        <Section title="Doctors">
          {doctors.slice(0, 4).map((doc) => (
            <Card
              key={doc._id}
              name={doc.name}
              sub={doc.specialization}
              color="#3b82f6"
            />
          ))}
        </Section>

        {/* PATIENTS */}
        <Section title="Patients">
          {patients.slice(0, 4).map((p) => (
            <Card
              key={p._id}
              name={p.name}
              sub={p.disease}
              color="#22c55e"
            />
          ))}
        </Section>
      </div>
    </div>
  );
}

/* SECTION COMPONENT */
function Section({ title, children }) {
  return (
    <div style={section}>
      <h3 style={sectionTitle}>{title}</h3>
      <div style={grid}>{children}</div>
    </div>
  );
}

/* CARD COMPONENT */
function Card({ name, sub, color }) {
  return (
    <div
      style={card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ ...avatar, background: color }}>
        {name?.charAt(0).toUpperCase()}
      </div>

      <h4 style={{ marginBottom: "5px" }}>{name}</h4>
      <p style={text}>{sub}</p>
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
  marginBottom: "25px",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  marginBottom: "30px",
};

const statCard = {
  color: "#fff",
  padding: "25px",
  borderRadius: "16px",
  textAlign: "center",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
};

const section = {
  marginBottom: "30px",
};

const sectionTitle = {
  marginBottom: "15px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: "20px",
};

const card = {
  background: "#fff",
  padding: "18px",
  borderRadius: "14px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  transition: "all 0.3s ease",
  cursor: "pointer",
};

const avatar = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  marginBottom: "10px",
  fontSize: "18px",
};

const text = {
  color: "#64748b",
  fontSize: "14px",
};

export default AdminDashboard;