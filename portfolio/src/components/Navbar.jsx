import React from "react";
import "./Navbar.css";
import Logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>

         <div className="navbar-menu">
          <Link to="/Home">Home</Link>{" "}
          <Link to="/about">About</Link>{" "}
          <Link to="/projects">Projects</Link>{" "}
          <Link to="/exp">Experience</Link>{" "}
          <Link to="/contact">Contact</Link>{" "}
        </div>
        
      </nav>
    </>
  );
}
