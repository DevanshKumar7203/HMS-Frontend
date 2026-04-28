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
  MenuItem,
} from "@mui/material";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "PATIENT",
  });

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    navigate("/login");
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
        <Paper elevation={4} sx={{ p: 4, width: "100%", borderRadius: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Register 
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <TextField
              select
              fullWidth
              label="Role"
              margin="normal"
              value={form.role}
              onChange={(e) =>
                setForm({ ...form, role: e.target.value })
              }
            >
              <MenuItem value="PATIENT">Patient</MenuItem>
              <MenuItem value="DOCTOR">Doctor</MenuItem>
            </TextField>

            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 2, borderRadius: 2 }}
              type="submit"
            >
              Register
            </Button>
          </form>

          <Typography align="center" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default Register;