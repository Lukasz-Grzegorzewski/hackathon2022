import React from "react";
import "../styles/footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="logo">
                <Link to="//fr-fr.facebook.com/">
                    <AiFillFacebook />
                </Link>

                <Link to="//www.instagram.com/?hl=fr">
                    <BsInstagram />
                </Link>

                <Link to="//twitter.com/?lang=fr">
                    <BsTwitter />
                </Link>
            </div>

            <div className="name">
                <p className="firts">Amelie Guilloux</p>
                <p className="firts">Łukasz Grzegorzewski</p>
                <p className="firts">Baptiste Courtin</p>
                <p className="firts">Thibaud Braunt</p>
                <p className="firts">Nathalie Dune</p>
            </div>
        </footer>
    );
}

export default Footer;
