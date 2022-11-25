import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo4.png";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <div className="links">
        <Link className="link" to={"/"}>Login</Link>
        <Link className="link" to={"/registration"}>Registration</Link>
      </div>
    </div>
  );
};

export default Navbar;
