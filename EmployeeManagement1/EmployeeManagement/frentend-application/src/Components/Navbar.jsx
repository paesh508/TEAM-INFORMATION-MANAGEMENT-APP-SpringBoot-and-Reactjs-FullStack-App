import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar-container">
        <h2 className="navbar-title">Employee Management System</h2>
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/add-employee" className="navbar-link">Add Employee</Link>
      <Link to="/employees" className="navbar-link">View Employee</Link>
      <Link to="/about" className="navbar-link">About</Link>
      <Link to="/contact" className="navbar-link">Contact</Link>
     
    </div>
  )
}
