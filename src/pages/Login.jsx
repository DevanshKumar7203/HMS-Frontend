import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(form);

      const role = res?.data?.role;

      if (role === "ADMIN") navigate("/admin");
      else if (role === "DOCTOR") navigate("/doctor");
      else navigate("/patient");

    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper elevation={4} sx={{ padding: 4, width: "100%", borderRadius: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              variant="outlined"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 2, borderRadius: 2 }}
              type="submit"
            >
              Login
            </Button>
          </form>

          <Typography align="center" sx={{ mt: 2 }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              Register
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;