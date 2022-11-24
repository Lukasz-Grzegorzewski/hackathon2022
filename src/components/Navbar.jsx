import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = ({ setAuthentification }) => {

    return (
        <nav className="navbar">
            <div className="navbarInner">
                <Link to="/home">Placeholder</Link>
                <div className="loggedIn">
                    <Link to="/profile">Profile</Link>
                    <Link to="/" onClick={() => setAuthentification(false)}>Logout</Link>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
