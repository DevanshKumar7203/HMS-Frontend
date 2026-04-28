import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Users,
  ShieldCheck,
  Activity,
} from "lucide-react";

function Home() {
  const features = [
    {
      title: "Doctor Management",
      desc: "Add, update and manage doctors easily.",
      icon: <Stethoscope size={32} />,
    },
    {
      title: "Patient Records",
      desc: "Track patient data and medical history.",
      icon: <Users size={32} />,
    },
    {
      title: "Secure System",
      desc: "JWT authentication with role-based access.",
      icon: <ShieldCheck size={32} />,
    },
    {
      title: "Real-Time Data",
      desc: "Monitor hospital operations instantly.",
      icon: <Activity size={32} />,
    },
  ];

  const stats = [
    { label: "Doctors", value: "50+" },
    { label: "Patients", value: "500+" },
    { label: "Hospitals", value: "10+" },
  ];

  return (
    <>

      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          color: "white",
          animation: "fadeIn 1s ease-in",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            
            {/* LEFT */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                fontWeight={800}
                sx={{ mb: 2, lineHeight: 1.2 }}
              >
                Smart Hospital Management System
              </Typography>

              <Typography sx={{ color: "#94a3b8", mb: 4 }}>
                Manage patients, doctors and hospital operations with a modern,
                secure and scalable platform.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/login"
                  sx={{
                    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                    px: 3,
                    borderRadius: "10px",
                    textTransform: "none",
                  }}
                >
                  Get Started
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  to="/register"
                  sx={{
                    color: "white",
                    borderColor: "#334155",
                    borderRadius: "10px",
                    textTransform: "none",
                  }}
                >
                  Create Account
                </Button>
              </Stack>
            </Grid>


            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: "#1e293b",
                  color: "white",
                  animation: "fadeUp 1s ease",
                }}
              >
                <Typography variant="h6" mb={2}>
                  System Overview
                </Typography>

                <Stack spacing={2}>
                  {[
                    { label: "Total Doctors", value: "24" },
                    { label: "Patients", value: "120" },
                    { label: "Active Cases", value: "18" },
                  ].map((item, i) => (
                    <Box
                      key={i}
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Typography>{item.label}</Typography>
                      <Typography fontWeight="bold">
                        {item.value}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>


      <Box sx={{ py: 10, backgroundColor: "#f8fafc" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight={700}
            mb={6}
          >
            Powerful Features
          </Typography>

          <Grid container spacing={4}>
            {features.map((item, i) => (
              <Grid item xs={12} md={3} key={i}>
                <Paper
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    height: "100%",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Box mb={2} color="primary.main">
                    {item.icon}
                  </Box>

                  <Typography variant="h6" fontWeight={700}>
                    {item.title}
                  </Typography>

                  <Typography sx={{ color: "#64748b", mt: 1 }}>
                    {item.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


      <Box sx={{ py: 8, backgroundColor: "#0f172a", color: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} textAlign="center">
            {stats.map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Typography variant="h4" fontWeight={800}>
                  {item.value}
                </Typography>
                <Typography sx={{ color: "#94a3b8" }}>
                  {item.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


      <Box sx={{ py: 10, textAlign: "center" }}>
        <Container>
          <Typography variant="h4" fontWeight={700} mb={2}>
            Ready to simplify hospital management?
          </Typography>

          <Typography sx={{ color: "#64748b", mb: 4 }}>
            Start using the system today and improve efficiency.
          </Typography>

          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/register"
            sx={{
              px: 4,
              borderRadius: "10px",
              textTransform: "none",
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            }}
          >
            Get Started Now
          </Button>
        </Container>
      </Box>


      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </>
  );
}

export default Home;