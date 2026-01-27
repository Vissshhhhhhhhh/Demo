import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div id="navmain">
        <Link id="buttons" to="/">HOME</Link>
        <Link id="buttons" to="/form">FORM</Link>
        <Link id="buttons" to="/contact">CONTACT</Link>
        <Link id="buttons" to="/about">ABOUT</Link>
    </div>
  )
}
