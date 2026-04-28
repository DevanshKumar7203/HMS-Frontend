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
    setUser(res.data.data);
    return res.data; 
  };

  //register
  const register = async (form) => {
    await API.post("/auth/register", form);
  };

  //logout
  const logout = async () => {
    await API.post("/auth/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);