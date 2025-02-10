import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Navbar from './components/Navbar';
import Shop from './components/Shop';
function App() {

  return (
    <>
  <Router>
        <Navbar />
        {/* <Alert></Alert> */}
        <div className="container">
        <Routes>
          <Route path="/" element={<Shop/>} />
        </Routes></div>
      </Router>
    </>
  )
}

export default App
