import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
    } else {
      setMode("light");
      document.body.style.background = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Text-Editor" about="About" mode={mode} togglemode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter Your Text To Analyze Below" mode={mode} />} />
            <Route path="/about" element={<About mode={mode} togglemode={toggleMode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
