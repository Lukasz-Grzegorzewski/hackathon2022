import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

const Navbar = ({ authentification, setAuthentification, darkMode, setDarkMode }) => {

    console.log(authentification)
    const navigate = useNavigate();

    const handleClick = () => {
        window.localStorage.setItem(
            "authentification",
            JSON.stringify(false)
        );
        setAuthentification(false)
        navigate('/')
    }

    return (
        <nav className="navbar">
            <div className="navbarContainer">
                <div className="title">
                    <Link to="/home ">
                        <img className="logo" src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="navbarInner">
                    <div className="toggle-mode">
                        <input
                            type="checkbox"
                            id="toggle"
                            onChange={() => setDarkMode(!darkMode)}
                        />
                        <label class="toggle" for="toggle">
                            <HiSun className="sun icon" />
                            <HiMoon className="moon icon" />
                            <span className="ball"></span>
                        </label>
                    </div>
                    <div className="buttons">
                        {authentification ? (
                            <>
                                <Link to='/user'>Profil</Link>
                                <button onClick={handleClick}>Déconnexion</button>
                            </>
                        ) : (
                            <Link to="/registration">S'enregistrer</Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
