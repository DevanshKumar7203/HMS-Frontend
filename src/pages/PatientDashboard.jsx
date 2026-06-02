import React, { useEffect, useState } from "react";
import {
  User,
  HeartPulse,
  Phone,
  Calendar,
  Stethoscope,
} from "lucide-react";

import { getPatients } from "../services/hospitalServices";

function PatientDashboard() {

  const [patients, setPatients] = useState([]);

  const [loading, setLoading] = useState(true);


  // ==========================================
  // FETCH DATA
  // ==========================================
  useEffect(() => {

    fetchMyData();

  }, []);


  const fetchMyData = async () => {

    try {

      const data = await getPatients();

      console.log(data);

      setPatients(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };


  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "40px",
      }}
    >

      {/* HEADER */}
      <div
        style={{
          marginBottom: "35px",
        }}
      >

        <h1
          style={{
            fontSize: "32px",
            color: "#1976d2",
            marginBottom: "8px",
          }}
        >
          Patient Dashboard
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: "15px",
          }}
        >
          View your medical records and patient details
        </p>

      </div>


      {/* LOADING */}
      {loading ? (

        <div
          style={{
            textAlign: "center",
            marginTop: "80px",
            fontSize: "18px",
            color: "#666",
          }}
        >
          Loading patient data...
        </div>

      ) : patients.length === 0 ? (

        // EMPTY STATE
        <div
          style={{
            background: "#fff",
            padding: "40px",
            borderRadius: "14px",
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          }}
        >

          <h2
            style={{
              color: "#444",
            }}
          >
            No Records Found
          </h2>

          <p
            style={{
              color: "#777",
              marginTop: "10px",
            }}
          >
            Your patient records are not available yet.
          </p>

        </div>

      ) : (

        // PATIENT CARDS
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "25px",
          }}
        >

          {patients.map((p) => (

            <div
              key={p._id}
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
                transition: "0.3s",
              }}
            >

              {/* TOP */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >

                <div
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "50%",
                    background: "#1976d2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  <User size={28} />
                </div>

                <div>
                  <h2
                    style={{
                      margin: 0,
                      color: "#222",
                    }}
                  >
                    {p.name}
                  </h2>

                  <p
                    style={{
                      margin: 0,
                      color: "#777",
                      fontSize: "14px",
                    }}
                  >
                    Patient Record
                  </p>
                </div>

              </div>


              {/* DETAILS */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <HeartPulse size={18} color="#1976d2" />

                  <span>
                    <strong>Disease:</strong>{" "}
                    {p.disease}
                  </span>
                </div>


                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Phone size={18} color="#1976d2" />

                  <span>
                    <strong>Phone:</strong>{" "}
                    {p.phoneNo}
                  </span>
                </div>


                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Stethoscope
                    size={18}
                    color="#1976d2"
                  />

                  <span>
                    <strong>Doctor:</strong>{" "}
                    {p?.doctorAssigned?.name || "N/A"}
                  </span>
                </div>


                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Calendar
                    size={18}
                    color="#1976d2"
                  />

                  <span>
                    <strong>Admitted:</strong>{" "}
                    {new Date(
                      p.admittedDate
                    ).toLocaleDateString()}
                  </span>
                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default PatientDashboard;