import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getPatients } from "../services/hospitalServices";

function DoctorPatients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await getPatients();
      const data = res?.data?.data || [];
      setPatients(data);

    } catch (error) {
      console.log("Error fetching patients:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div style={mainContent}>
        <h1>My Patients </h1>

        {/* LOADING */}
        {loading && <p>Loading patients...</p>}

        {/* EMPTY */}
        {!loading && patients.length === 0 && (
          <div style={emptyBox}>
            <h3>No Patients Found</h3>
            <p>You don’t have any assigned patients yet.</p>
          </div>
        )}

        {/* TABLE */}
        {!loading && patients.length > 0 && (
          <table style={table}>
            <thead style={thead}>
              <tr>
                <th style={th}>Name</th>
                <th style={th}>Age</th>
                <th style={th}>Email</th>
                <th style={th}>Disease</th>
                <th style={th}>Phone</th>
              </tr>
            </thead>

            <tbody>
              {patients.map((p) => (
                <tr key={p._id} style={tr}>
                  <td style={td}>{p.name || "N/A"}</td>
                  <td style={td}>{p.age || "-"}</td>
                  <td style={td}>{p.email || "N/A"}</td>
                  <td style={td}>{p.disease || "-"}</td>
                  <td style={td}>{p.phoneNo || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
  background: "#f8fafc",
};

const emptyBox = {
  padding: "20px",
  background: "#f1f5f9",
  borderRadius: "10px",
  marginTop: "20px",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
  background: "#fff",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const thead = {
  background: "#0f172a",
  color: "#fff",
};

const th = {
  padding: "12px",
  textAlign: "left",
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #e5e7eb",
};

const tr = {
  transition: "0.2s",
};

export default DoctorPatients;