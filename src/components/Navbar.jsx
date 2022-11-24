import React from "react";
import logo from "../assets/logo4.png"
import "../styles/navbar.css"


const Navbar = () => {
    return <div className="navbar"><img className="logo" src={logo} alt="logo"/><button>Login</button></div>;
};

export default Navbar;
