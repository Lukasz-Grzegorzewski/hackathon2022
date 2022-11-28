import React from "react";
import { Link } from "react-router-dom";
import "../styles/page404.css";

const Page404 = () => {
  return (
    <div className="page404">
      <h1 className="error404">404</h1>
      <div className="">
        <p>URL n'existe pas!</p><br/>
        <Link className="link" to={"/"}>CONNEXION</Link>
      </div>
    </div>
  );
};

export default Page404;
