import { createContext, useContext, useEffect, useState } from "react";
import { API } from "../services/authServices";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
console.log(user);
  const fetchUser = async () => {
    try {
      const res = await API.get("/auth/me");
      setUser(res.data.data);
    } catch (err) {
      console.error("Error fetching user:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  //login
  const login = async (form) => {
    const res = await API.post("/auth/login", form);
    const token = res.data?.token || res.data?.data?.token;

    if (token) {
      localStorage.setItem("token", token);
    }

    setUser(res.data.data || res.data);
    return res.data;
  };

  //register
  const register = async (form) => {
    await API.post("/auth/register", form);
  };

  //logout
  const logout = async () => {
    await API.post("/auth/logout");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);