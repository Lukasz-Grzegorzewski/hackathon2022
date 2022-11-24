import React, { useState } from "react";
import users from "../data/users.json";
import "../styles/login.css";

const Login = ({
  authentification,
  auth,
  email,
  updateEmail,
  password,
  updatePassword,
  error,
}) => {
  const [aut, setAut] = useState(authentification);

  return (
    <div className="login-container">
      <div className="users-temp">
        {users.map((user) => (
          <ul>
            <li>Email: {user.email}</li>
            <li>Password: {user.password}</li>
          </ul>
        ))}
      </div>
      <div className="login-card">
        <form action="post" className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="email-container element-form">
            <h2 className={!error? "h1-no-error" : "h1-error"}>Wrong Email or Password</h2>
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
