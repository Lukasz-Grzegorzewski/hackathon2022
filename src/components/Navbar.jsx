import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo4.png";
import "../styles/navbar.css";

const Navbar = () => {
<<<<<<< HEAD
    return <div className="navbar"><img className="logo" src={logo} alt="logo" /><button>Login</button></div>;
=======
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <div className="links">
        <Link className="link" to={"/"}>Login</Link>
        <Link className="link" to={"/registration"}>Registration</Link>
      </div>
    </div>
  );
>>>>>>> 24130a3456025f73ba776f090e0ec9c164532f30
};

export default Navbar;
