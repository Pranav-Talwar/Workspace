import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this is present
import { NoteProvider } from './context/NoteContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import './App.css'

function App() {
    return (
        <NoteProvider>
            <Router>
                <Navbar />
                <div className="container my-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        {/* <Route path="/login" element={<Login />} /> */}

                        {/* <Route path="/signup" element={<Signup />} /> */}

                    </Routes>
                </div>
            </Router>
        </NoteProvider>
    );
}

export default App;