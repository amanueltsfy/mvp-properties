import { Container } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <Container component="section" maxWidth="lg" sx={{ padding: "1rem" }}>
      <Header />
      <Home />
      <Footer />
    </Container>
  );
};

export default Layout;
