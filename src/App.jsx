import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

import AdminDashboard from "./pages/AdminDashboard";
import AdminDoctors from "./pages/AdminDoctors";
import CreateDoctor from "./pages/CreateDoctor";
import AdminPatients from "./pages/AdminPatients";
import CreatePatientAdmin from "./pages/CreatePatientAdmin";

import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorPatients from "./pages/DoctorPatients";

import PatientDashboard from "./pages/PatientDashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>

          {/* ================= PUBLIC ================= */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ================= ADMIN ================= */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="ADMIN">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/doctors"
            element={
              <ProtectedRoute role="ADMIN">
                <AdminDoctors />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/create-doctor"
            element={
              <ProtectedRoute role="ADMIN">
                <CreateDoctor />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/patients"
            element={
              <ProtectedRoute role="ADMIN">
                <AdminPatients />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/create-patient"
            element={
              <ProtectedRoute role="ADMIN">
                <CreatePatientAdmin />
              </ProtectedRoute>
            }
          />

          {/* ================= DOCTOR ================= */}
          <Route
            path="/doctor"
            element={
              <ProtectedRoute role="DOCTOR">
                <DoctorDashboard />
              </ProtectedRoute>
            }
          />

       <Route
            path="/doctor/patients"
            element={
              <ProtectedRoute role="DOCTOR">
                <DoctorPatients />
              </ProtectedRoute>
            }
          /> 

         

          {/* ================= PATIENT ================= */}
          <Route
            path="/patient"
            element={
              <ProtectedRoute role="PATIENT">
                <PatientDashboard />
              </ProtectedRoute>
            }
          />

          {/* ================= FALLBACK ================= */}
          <Route path="*" element={<h2>Page Not Found </h2>} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;