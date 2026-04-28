import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getPatients } from "../services/hospitalServices";

function PatientDashboard() {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPatient();
  }, []);

  const fetchPatient = async () => {
    try {
      const res = await getPatients();
      setPatient(res?.data?.data[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={mainContent}>
        {/* HEADER */}
        <div style={header}>
          <h1>My Dashboard </h1>
          <p style={{ color: "#64748b" }}>Your health summary</p>
        </div>

        {loading && <p style={loadingText}>Loading...</p>}

        {!loading && !patient && (
          <div style={emptyBox}>
            <p>No patient record found</p>
          </div>
        )}

        {!loading && patient && (
          <div style={container}>
            
            {/* PROFILE CARD */}
            <div style={profileCard}>
              <div style={avatar}>
                {patient.name?.charAt(0).toUpperCase()}
              </div>

              <h2>{patient.name}</h2>
              <p style={{ color: "#fff" }}>{patient.gender}, {patient.age} yrs</p>

              <span style={statusBadge}>Active</span>
            </div>

            {/* DETAILS CARD */}
            <div style={detailsCard}>
              <h3 style={sectionTitle}>Medical Info</h3>

              <p><span style={label}>Disease:</span> {patient.disease || "-"}</p>
              <p><span style={label}>Phone:</span> {patient.phoneNo || "-"}</p>
              <p><span style={label}>Email:</span> {patient.email || "-"}</p>
            </div>

            {/* DOCTOR CARD */}
            <div style={doctorCard}>
              <h3 style={sectionTitle}>Assigned Doctor</h3>

              <p><span style={label}>Name:</span> {patient.doctorAssigned?.name || "N/A"}</p>
              <p><span style={label}>Specialization:</span> {patient.doctorAssigned?.specialization || "N/A"}</p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const mainContent = {
  marginLeft: "220px",
  padding: "30px",
  width: "100%",
  minHeight: "100vh",
  background: "#f1f5f9",
};

const header = {
  marginBottom: "20px",
};

const loadingText = {
  color: "#64748b",
};

const container = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
  marginTop: "20px",
};

const profileCard = {
  background: "linear-gradient(135deg, #3b82f6, #6366f1)",
  color: "white",
  padding: "25px",
  borderRadius: "16px",
  textAlign: "center",
  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
};

const avatar = {
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  background: "white",
  color: "#3b82f6",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 auto 10px",
};

const statusBadge = {
  display: "inline-block",
  marginTop: "10px",
  padding: "6px 12px",
  background: "#dcfce7",
  color: "#166534",
  borderRadius: "20px",
  fontSize: "12px",
};

const detailsCard = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const doctorCard = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  borderLeft: "5px solid #3b82f6",
};

const sectionTitle = {
  marginBottom: "10px",
};

const label = {
  fontWeight: "600",
};

const emptyBox = {
  padding: "25px",
  background: "#ffffff",
  borderRadius: "12px",
  marginTop: "20px",
  textAlign: "center",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};

export default PatientDashboard;