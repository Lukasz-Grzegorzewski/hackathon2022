import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Card from "./pages/Card";

function App() {
    // const [list, setList] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        const source = axios.CancelToken.source();
        axios
            .get(
                "https://randomuser.me/api/?inc=gender,name,location,dob,picture&results=10",
                {
                    cancelToken: source.token,
                }
            )
            .then((response) => response.data)
            .then((data) => {
                console.log(data.results[0]);
                // setList(data.results);
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
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route
                    path="/card"
                    element={user.length !== 0 && <Card user={user} />}
                />
                <Route path="/user" element={<User />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
