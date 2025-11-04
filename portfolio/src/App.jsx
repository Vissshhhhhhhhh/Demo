import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<div>From Projects</div>} />
        <Route path="/exp" element={<div>From Experience page</div>} />
        <Route path="/contact" element={<div>From Contact</div>} />
      </Routes>
    </Router>
  )
}

export default App
