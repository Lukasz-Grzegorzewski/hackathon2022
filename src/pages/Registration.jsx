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
    <div className="login-container">

      <div className="login-card">
        <form
          action="http://localhost:5010/registration" 
          method="post"
          className="reg-form"
          onSubmit={() => {
            // navigate("/");
          }}
        >
          <div className="name-container el-reg-form">
            <label className="name-label" htmlFor="name-input">
              Name
            </label>
            <input
              id="name-input"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="surname-container el-reg-form">
            <label className="surname-label" htmlFor="surname-input">
              Surname
            </label>
            <input
              id="surname-input"
              type="text"
              name="surname"
              placeholder="Enter your surname"
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
              placeholder="Enter your email"
            />
          </div>
          <div className="genre-container el-reg-form">
            <label className="genre-label" htmlFor="genre-input">
              Genre
            </label>
            <select name="genre" id="genre" defaultValue=''>
              
              <option value="">---</option>
              <option value="female">female</option>
              <option value="male">male</option>
            </select>
          </div>

          <div className="password-container el-reg-form">
            <label htmlFor="password-input">Password</label>
            <input
              id="password-input"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="dateOfBirth-container el-reg-form">
            <label htmlFor="dateOfBirth-input">Date of birth</label>
            <input
              id="dateOfBirth-input"
              type="date"
              name="dob"
              placeholder="Enter your dateOfBirth"
            />
          </div>
          <div className="city-container el-reg-form">
            <label htmlFor="city-input">City</label>
            <input
              id="city-input"
              type="text"
              name="city"
              placeholder="Enter your city"
            />
          </div>

          <div className="submitBtn-container">
            <button className="submitBtn" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
