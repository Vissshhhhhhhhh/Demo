import React from "react";
import "./Navbar.css";
import Logo from "../assets/logo.webp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>

       <Router>
         <nav className="navbar-menu">
          <Link to="/">Home</Link>|{" "}
          <Link to="/about">About</Link>|{" "}
          <Link to="/projects">Projects</Link>|{" "}
          <Link to="/exp">Experience</Link>|{" "}
          <Link to="/contact">Contact</Link>|{" "}

          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/about" element={<About />} />
            {/* <Route />
            <Route />
            <Route /> */}
          </Routes>
        </nav>
       </Router>
      </nav>
    </>
  );
}
