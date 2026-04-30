import axios from "axios";

export const API = axios.create({
  baseURL: "https://hms-backend-1-s3ja.onrender.com/api",
 withCredentials: true,
});