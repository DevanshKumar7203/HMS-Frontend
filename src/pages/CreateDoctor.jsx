import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { API } from "../services/authServices";

function CreateDoctor() {
  const [form, setForm] = useState({
    name: "",
    specialization: "",
    experience: "",
    qualification: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/doctors", form);
      alert("Doctor Created");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  return (
    <div style={{ display: "flex", background: "#f4f6f9", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ marginLeft: "240px", width: "100%", padding: "30px" }}>
        <div
          style={{
            maxWidth: "500px",
            margin: "auto",
            background: "#fff",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Create Doctor 
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              style={inputStyle}
              placeholder="Full Name"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              style={inputStyle}
              placeholder="Specialization"
              onChange={(e) =>
                setForm({ ...form, specialization: e.target.value })
              }
            />

            <input
              style={inputStyle}
              placeholder="Experience (years)"
              type="number"
              onChange={(e) =>
                setForm({ ...form, experience: e.target.value })
              }
            />

            <input
              style={inputStyle}
              placeholder="Qualification"
              onChange={(e) =>
                setForm({ ...form, qualification: e.target.value })
              }
            />

            <input
              style={inputStyle}
              placeholder="Email Address"
              type="email"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "#4CAF50",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.target.style.background = "#45a049")
              }
              onMouseOut={(e) =>
                (e.target.style.background = "#4CAF50")
              }
            >
              Create Doctor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateDoctor;