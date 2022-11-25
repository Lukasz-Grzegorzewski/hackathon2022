import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const [name, setName] = useState([]);
  const [surname, setSurname] = useState([]);
  const [genre, setGenre] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [dateOfBirth, setDateOfBirth] = useState([]);
  const [city, setCity] = useState([]);

  const navigate = useNavigate();

  return (
    <div className="login-container registration-container">

      <div className="login-card">
        <form
          action="http://localhost:5010/registration"
          method="post"
          className="reg-form"
          // onSubmit={() => {
          // }}
        >
          <div className="name-container el-reg-form">
            <label className="name-label" htmlFor="name-input">
              Prénom
            </label>
            <input
              id="name-input"
              type="text"
              name="name"
              placeholder="Votre prénom"
            />
          </div>
          <div className="surname-container el-reg-form">
            <label className="surname-label" htmlFor="surname-input">
              Nom
            </label>
            <input
              id="surname-input"
              type="text"
              name="surname"
              placeholder="Votre nom"
            />
          </div>
          <div className="email-container el-reg-form">
            <label className="email-label" htmlFor="email-input">
              Email
            </label>
            <input
              id="email-input"
              type="email"
              name="email"
              placeholder="Votre email"
            />
          </div>
          <div className="genre-container el-reg-form">
            <label className="genre-label" htmlFor="genre-input">
              Genre
            </label>
            <select name="genre" id="genre" defaultValue=''>

              <option value="">---</option>
              <option value="female">féminin</option>
              <option value="male">masculin</option>
            </select>
          </div>

          <div className="password-container el-reg-form">
            <label htmlFor="password-input">Mot de passe</label>
            <input
              id="password-input"
              type="password"
              name="password"
              placeholder="Votre mot de passe"
            />
          </div>
          <div className="dateOfBirth-container el-reg-form">
            <label htmlFor="dateOfBirth-input">Date de naissance</label>
            <input
              id="dateOfBirth-input"
              type="date"
              name="dob"
              placeholder="Enter your dateOfBirth"
            />
          </div>
          <div className="city-container el-reg-form">
            <label htmlFor="city-input">Ville</label>
            <input
              id="city-input"
              type="text"
              name="city"
              placeholder="Votre ville"
            />
          </div>

          <div className="submitBtn-container">
            <button className="submitBtn" type="submit">
              Valider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
