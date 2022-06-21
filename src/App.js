import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import theme from "./components/Themes";

function App() {
  return (
    <NextUIProvider theme={theme}>
      {/* <div className="App"> */}
      <NavBar />
      <About />
      <Skills />
      <Resume />
      {/* </div> */}
    </NextUIProvider>
  );
}

export default App;
