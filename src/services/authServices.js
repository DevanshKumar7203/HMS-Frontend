import axios from "axios";

export const API = axios.create({
  baseURL: "https://hms-backend-1-s3ja.onrender.com/api",
 withCredentials: true,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});