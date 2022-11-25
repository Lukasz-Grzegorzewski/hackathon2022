import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = ({ authentification, authEnter }) => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const updateEmail = (valueE) => setEmail(valueE);
  const updatePassword = (valueP) => setPassword(valueP);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get("http://localhost:5010/", {
        cancelToken: source.token,
      })
      .then((res) => {
        console.log("users.data", res.data);
        setUsers(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    return () => {
      source.cancel();
    };
  }, []);

  const auth = () => {
    if (
      users.some((user) => user.email === email && user.password === password)
    ) {
      authEnter(!authentification);
      navigate("/home");
    } else {
      setError(!error);
    }
  };

  return (
    <div className="login-container">
      <div className="users-temp">
        {users.map((user, index) => (
          <div key={index} className="help-users">
            <ul className="ul" >
              <li>Email:</li>
              <li className="temp">{user.email}</li>
              <li>Password:</li>
              <li className="temp">{user.password}</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="login-card">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="email-container element-form">
            <h2 className={!error ? "h1-no-error" : "h1-error"}>
              Wrong Email or Password
            </h2>
            <label className="email-label" htmlFor="email-input">
              Email
            </label>
            <input
              className={!error ? "email-input" : "email-input error"}
              type="email"
              name="email"
              value={email}
              onChange={(event) => updateEmail(event.target.value)}
            />
          </div>

          <div className="password-container element-form">
            <label htmlFor="password-input">Password</label>
            <input
              className={!error ? "password-input" : "password-input error"}
              type="password"
              name="password"
              value={password}
              onChange={(event) => updatePassword(event.target.value)}
            />
          </div>

          <div className="submitBtn-container">
            <button className="submitBtn" onClick={() => auth()} type="submit">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
