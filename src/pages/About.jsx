import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Divider,
} from "@mui/material";
import { ShieldCheck, Activity, Users } from "lucide-react";

function About() {
  const metrics = [
    { value: "99%", label: "System Reliability" },
    { value: "24/7", label: "Availability" },
    { value: "Secure", label: "Authentication" },
    { value: "Fast", label: "Performance" },
  ];

  const features = [
    {
      icon: <Activity size={32} />,
      title: "Smart Doctor Management",
      desc: "Easily manage doctors and their responsibilities.",
    },
    {
      icon: <Users size={32} />,
      title: "Patient Data Handling",
      desc: "Store and track patient information securely.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Secure Access System",
      desc: "Role-based authentication ensures safety.",
    },
  ];

  return (
    <>

      <Box
        sx={{
          py: { xs: 10, md: 14 },
          textAlign: "center",
          background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
          color: "white",
          animation: "fadeIn 1s ease-in",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            md="h2"
            fontWeight={800}
            sx={{
              fontSize: { xs: "28px", md: "48px" },
              lineHeight: 1.2,
            }}
          >
            Modern Hospital <br /> Management System
          </Typography>

          <Typography
            sx={{
              mt: 3,
              opacity: 0.9,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Designed to simplify workflows and deliver better healthcare
            management with a secure and scalable system.
          </Typography>
        </Container>
      </Box>


      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6} alignItems="center">
          {/* LEFT */}
          <Grid item xs={12} md={5}>
            <Box sx={{ animation: "fadeLeft 1s ease" }}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Built for Simplicity & Scale
              </Typography>

              <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Our system allows hospitals to manage operations effortlessly —
                from patient records to doctor assignments — all in one platform.
              </Typography>
            </Box>
          </Grid>

          {/* RIGHT METRICS */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={4}>
              {metrics.map((item, index) => (
                <Grid item xs={6} key={index}>
                  <Box
                    sx={{
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                      },
                    }}
                  >
                    <Typography
                      variant="h3"
                      fontWeight={800}
                      sx={{ color: "#2563eb" }}
                    >
                      {item.value}
                    </Typography>

                    <Typography color="text.secondary">
                      {item.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Divider />


      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          {features.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: "16px",
                  background: "#f8fafc",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 25px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <Stack spacing={2}>
                  <Box sx={{ color: "#2563eb" }}>{item.icon}</Box>

                  <Typography variant="h6" fontWeight={700}>
                    {item.title}
                  </Typography>

                  <Typography color="text.secondary">
                    {item.desc}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>


      <Box
        sx={{
          py: { xs: 8, md: 12 },
          textAlign: "center",
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          color: "white",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Built for Modern Healthcare Teams
          </Typography>

          <Typography sx={{ opacity: 0.8 }}>
            Experience a system that prioritizes simplicity, speed, and security.
          </Typography>
        </Container>
      </Box>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes fadeLeft {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
    </>
  );
}

export default About;