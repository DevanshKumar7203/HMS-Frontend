import { useEffect, useState } from "react";
import { API } from "../services/authServices";
import Sidebar from "../components/Sidebar";

function AdminCreatePatient() {
  const [form, setForm] = useState({
    name: "",
    email: "", 
    age: "",
    phoneNo: "",
    gender: "",
    disease: "",
    doctorAssigned: "",
  });

  const [doctors, setDoctors] = useState([]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/patients", form);
      alert("Patient created");

      setForm({
        name: "",
        email: "", 
        age: "",
        phoneNo: "",
        gender: "",
        disease: "",
        doctorAssigned: "",
      });

    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Error creating patient ❌");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
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
            Create Patient 
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >

         
            <input
              style={inputStyle}
              placeholder="Full Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

         
            <input
              style={inputStyle}
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

        
            <input
              style={inputStyle}
              placeholder="Age"
              type="number"
              value={form.age}
              onChange={(e) =>
                setForm({ ...form, age: e.target.value })
              }
            />

        
            <input
              style={inputStyle}
              placeholder="Phone Number"
              value={form.phoneNo}
              onChange={(e) =>
                setForm({ ...form, phoneNo: e.target.value })
              }
            />

       
            <select
              style={inputStyle}
              value={form.gender}
              onChange={(e) =>
                setForm({ ...form, gender: e.target.value })
              }
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

 
            <input
              style={inputStyle}
              placeholder="Disease / Condition"
              value={form.disease}
              onChange={(e) =>
                setForm({ ...form, disease: e.target.value })
              }
            />


            <select
              style={inputStyle}
              value={form.doctorAssigned}
              onChange={(e) =>
                setForm({ ...form, doctorAssigned: e.target.value })
              }
            >
              <option value="">Select Doctor</option>
              {doctors.map((doc) => (
                <option key={doc._id} value={doc._id}>
                  {doc.name} ({doc.specialization})
                </option>
              ))}
            </select>

  
            <button
              type="submit"
              style={{
                marginTop: "10px",
                padding: "12px",
                background: "#2196F3",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Create Patient
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminCreatePatient;