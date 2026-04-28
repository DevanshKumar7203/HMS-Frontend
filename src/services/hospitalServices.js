import { API } from "./authServices";

// DOCTORS
export const getDoctors = async () => {
  try {
    const res = await API.get("/doctors");
    return res; // full res
  } catch (error) {
    console.log("Error fetching doctors:", error);
    throw error;
  }
};

// PATIENTS
export const getPatients = async () => {
  try {
    const res = await API.get("/patients");
    return res; 
  } catch (error) {
    console.log("Error fetching patients:", error);
    throw error;
  }
};