import { Container, useTheme } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

const App = () => {
  const theme = useTheme();
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        backgroundColor: `${theme.palette.background.default}`,
        color: `${theme.palette.primary.contrastText}`,
        overflowY: "auto",
        width: "100vw",
        height: "100vh"
      }}
    >
      <div className="content">
        <MainNavigation />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/experience"} element={<Experience />} />
          <Route path={"/skills"} element={<Skills />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </div>
    </Container>
  );
};

export default App;
