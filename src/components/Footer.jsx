import React from "react";
import { Container, Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 2,
        backgroundColor: "#0f172a",
        color: "#94a3b8",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2">
          © {new Date().getFullYear()} HMS. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;