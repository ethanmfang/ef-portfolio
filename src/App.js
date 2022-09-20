import "./App.css";
// import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import Projects from "./components/Projects";

function App() {
  return (
    <NextUIProvider>
      {/* <NavBar /> */}
      <About />
      <Skills />
      <Resume />
      <Projects />
    </NextUIProvider>
  );
}

export default App;
