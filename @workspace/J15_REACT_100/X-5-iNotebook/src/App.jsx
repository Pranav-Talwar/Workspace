import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css" 
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/Notes/NoteState"; // Import NoteState
import Alert from "./components/Alert";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <NoteState>
      <Router>
        {/* <Alert></Alert> */}
        <Navbar></Navbar>
        <div className="container  my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

        </Routes></div>
      </Router>
    </NoteState>
  );
}

export default App;
