import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import home from "../Assets/home.png";
import logo from "../Assets/logo.png";
import add from "../Assets/add.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="brand">EmpSys</div>

      <div className="nav-toggle" onClick={toggleNav}>
        ☰
      </div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={home} alt="Home" className="nav-icon" /> Home
        </Link>
        <Link to="/EmployeeList" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Employee List" className="nav-icon" /> Employee List
        </Link>
        <Link to="/AddEmployee" onClick={() => setIsOpen(false)}>
          <img src={add} alt="Add Employee" className="nav-icon" /> Add Employee
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
