import React from "react";
import { FiPlus } from "react-icons/fi";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>Home</h3>
      <button className="btn btn-add">
        <FiPlus />
        <span>Add</span>
      </button>
    </nav>
  );
};

export default Navbar;
