import { useEffect, useState } from "react";
import { API } from "../services/authServices";
import Sidebar from "../components/Sidebar";

function AdminCreatePatient() {

  // ==========================================
  // STATE
  // ==========================================
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

  const [loading, setLoading] = useState(false);


  // ==========================================
  // FETCH DOCTORS
  // ==========================================
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


  // ==========================================
  // HANDLE CHANGE
  // ==========================================
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };


  // ==========================================
  // HANDLE SUBMIT
  // ==========================================
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await API.post("/patients", form);

      alert("Patient created successfully ✅");

      // RESET FORM
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

      console.log(err);

      alert(
        err?.response?.data?.message ||
        "Error creating patient ❌"
      );

    } finally {

      setLoading(false);

    }

  };


  // ==========================================
  // STYLES
  // ==========================================
  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #dcdcdc",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  };


  return (

    <div
      style={{
        display: "flex",
        background: "#f4f6f9",
        minHeight: "100vh",
      }}
    >

      <Sidebar />

      {/* MAIN CONTENT */}
      <div
        style={{
          marginLeft: "240px",
          width: "100%",
          padding: "40px",
        }}
      >

        <div
          style={{
            maxWidth: "550px",
            margin: "auto",
            background: "#fff",
            padding: "35px",
            borderRadius: "14px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
          }}
        >

          {/* TITLE */}
          <h2
            style={{
              textAlign: "center",
              marginBottom: "25px",
              color: "#1976d2",
            }}
          >
            Create Patient 
          </h2>


          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Patient Email"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />

            {/* AGE */}
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={form.age}
              onChange={handleChange}
              style={inputStyle}
            />

            {/* PHONE */}
            <input
              type="text"
              name="phoneNo"
              placeholder="Phone Number"
              value={form.phoneNo}
              onChange={handleChange}
              style={inputStyle}
            />

            {/* GENDER */}
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">
                Select Gender
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>

              <option value="Others">
                Others
              </option>
            </select>


            {/* DISEASE */}
            <input
              type="text"
              name="disease"
              placeholder="Disease / Condition"
              value={form.disease}
              onChange={handleChange}
              style={inputStyle}
            />


            {/* DOCTOR */}
            <select
              name="doctorAssigned"
              value={form.doctorAssigned}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">
                Select Doctor
              </option>

              {doctors.map((doc) => (
                <option
                  key={doc._id}
                  value={doc._id}
                >
                  {doc.name} ({doc.specialization})
                </option>
              ))}
            </select>


            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: "10px",
                padding: "14px",
                background: "#1976d2",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              {loading
                ? "Creating..."
                : "Create Patient"}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default AdminCreatePatient;