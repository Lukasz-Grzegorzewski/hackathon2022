import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Card from "./pages/Card";
import Registration from "./pages/Registration";
import Page404 from "./components/Page404";

// import users from "./data/users.json";

function App() {
    const [list, setList] = useState([]);

    // pour un user
    const [user, setUser] = useState([]);

    //authentification login
    const [authentification, setAuthentification] = useState(false);
    const authEnter = () => {
        setAuthentification(!authentification);
    };

    // toggle dark/light mode
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const source = axios.CancelToken.source();
        axios
            .get(
                "https://randomuser.me/api/?inc=gender,name,location,dob,picture&results=50",
                {
                    cancelToken: source.token,
                }
            )
            .then((response) => response.data)
            .then((data) => {
                setList(data.results);
                setUser(data.results[0]);
            })
            .catch((error) => {
                console.error(error.message);
            });
        return () => {
            source.cancel();
        };
    }, []);

    return (
        <div className={darkMode ? "dark" : "light"}>
            <Navbar setAuthentification={setAuthentification} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Login
                            authentification={authentification}
                            authEnter={() => authEnter()}
                        />
                    }
                />
                <Route
                    path="/registration"
                    element={
                        <Registration />
                    }
                />
                {authentification ? (
                    <>
                        <Route
                            path="/home"
                            element={list.length !== 0 && <Home list={list} />}
                        />
                        <Route path="/card" element={<Card />} />
                        <Route path="/user" element={<User />} />
                    </>
                ) : (
                    <Route path="/*" element={<Page404 />} />
                )}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
