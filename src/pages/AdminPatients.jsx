import { useEffect, useState } from "react";
import { API } from "../services/authServices";
import Sidebar from "../components/Sidebar";
import {
  Search,
  User,
  Activity,
  Stethoscope,
  Mail
} from "lucide-react";

function AdminPatients() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await API.get("/patients");
      setPatients(res.data.data);
    } catch (err) {
      console.log(err);
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
          <h2>All Patients</h2>

          <div style={searchBox}>
            <Search size={18} color="#64748b" />
            <input
              type="text"
              placeholder="Search patient..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={searchInput}
            />
          </div>
        </div>

        {/* EMPTY */}
        {filteredPatients.length === 0 ? (
          <p style={emptyText}>No patients found</p>
        ) : (
          <div style={grid}>
            {filteredPatients.map((p) => (
              <div
                key={p._id}
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
                    {p.name?.charAt(0).toUpperCase()}
                  </div>

                  <span style={badge}>Patient</span>
                </div>

                {/* NAME */}
                <h3 style={{ marginBottom: "6px" }}>{p.name}</h3>

                {/* INFO */}
                <p style={text}>
                  <User size={14} /> Age: {p.age}
                </p>

                <p style={text}>
                  <Mail size={14} /> {p.email ? p.email : "N/A"}
                </p>
                <p style={text}>
                  <Activity size={14} /> {p.disease}
                </p>



                <p style={text}>
                  <Stethoscope size={14} /> {p.doctorAssigned?.name || "N/A"}
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
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
};

const badge = {
  background: "#dcfce7",
  color: "#166534",
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

export default AdminPatients;