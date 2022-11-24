import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Card from "./pages/Card";
import Page404 from "./components/Page404";

import users from "./data/users.json";

function App() {
    const [list, setList] = useState([]);

    //LOGIN
    const [authentification, setAuthentification] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    // pour un user
    const [user, setUser] = useState([]);

    const navigate = useNavigate();

    const updateEmail = (valueE) => setEmail(valueE);
    const updatePassword = (valueP) => setPassword(valueP);

    const auth = () => {
        if (
            users.some(
                (user) => user.email === email && user.password === password
            )
        ) {
            setAuthentification(true);
            navigate("/home");
        } else {
            setError(!error);
            //   navigate("/page404");
        }
    };
    //LOGIN - END

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
                console.log(data.results);
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
        <>
            <Navbar setAuthentification={setAuthentification} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Login
                            authentification={authentification}
                            auth={() => auth()}
                            email={email}
                            updateEmail={(valueE) => updateEmail(valueE)}
                            password={password}
                            updatePassword={(valueP) => updatePassword(valueP)}
                            error={error}
                        />
                    }
                />
                {authentification ? (
                    <>
                        <Route path="/home" element={<Home />} />
                        <Route
                            path="/card"
                            element={user.length !== 0 && <Card user={user} />}
                        />
                        <Route path="/user" element={<User />} />
                    </>
                ) : (
                    <Route path="/*" element={<Page404 />} />
                )}
            </Routes>
            <Footer />
        </>
    );
}

export default App;
