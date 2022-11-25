import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/user.css';
import axios from "axios";

const User = () => {

    const [userEmail, setUserEmail] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getEmail = localStorage.getItem("email");
        setUserEmail(JSON.parse(getEmail));
    }, [userEmail])

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

    const handleSubmit = () => {
        window.scrollTo(0, 0)
    };

    const destinations = [
        {
            city: "Damas",
            country: "Syrie"
        },
        {
            city: "Kaboul",
            country: "Afghanistan"
        },
        {
            city: "Sanaa",
            country: "Yémen"
        },
        {
            city: "Mogadiscio",
            country: "Somalie"
        },
        {
            city: "Djouba",
            country: "Soudan du Sud"
        }
    ];

    return (
        <main className="user">
            <section className="section section1">
                <div className="cards">
                    <div className="card1">
                        <img className="profile" src="https://randomuser.me/api/portraits/thumb/lego/6.jpg" alt="profile" />
                        <div className="cardInside">
                            <div className="img" />
                            <div className="info">
                                {users.map(u => u.email === userEmail && (
                                    <>
                                        {console.log(u.name)}
                                        <p className="carac"><span>♥</span> coding</p>
                                        <h2 className="profileName">{u.name} <br /> {u.surname}</h2>
                                        <p className="dob">{u.dob}</p >
                                        <p className="location">{u.city}, <span>{country}</span></p>
                                    </>
                                ))}
                                <Link className="link" to="/profile">Vos messages ➜</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="card2">
                        <h2 className="destinations">Destinations</h2>
                        <ul className="list">
                            {destinations.map((dest) => (
                                <li>{dest.city}, {dest.country}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section section2">
                <div id="details" className="details">
                    <h2>Modify your profile</h2>
                    <form action="localhost:5010/user" method="POST" className="form" onSubmit={handleSubmit}>
                        <div className="formContainer">
                            <div className="formInner firstname">
                                <label htmlFor="firstname">Changer prénom</label>
                                <input type="text" name="firstname" id="firstname" placeholder="Nouveau prénom" />
                            </div>
                            <div className="formInner lastname">
                                <label htmlFor="lastname">Change nom</label>
                                <input type="text" name="lastname" id="lastname" placeholder="Nouveau nom" />
                            </div>
                        </div>
                        <div className="formContainer">
                            <div className="formInner gender">
                                <label htmlFor="sexe">Changer sexe</label>
                                <select name="gender" id="gender">
                                    <option value="male">Homme</option>
                                    <option value="female">Femme</option>
                                </select>
                            </div>
                        </div>
                        <div className="formContainer">
                            <div className="formInner city">
                                <label htmlFor="name">Changer ville</label>
                                <input type="text" name="city" id="city" placeholder="Nouvelle ville" />
                            </div>
                        </div>
                        <input className="submitButton" type="submit" value="Envoyer ✈" />
                    </form>
                </div>
            </section>
        </main>
    );
};

export default User;
