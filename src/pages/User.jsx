import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import '../styles/user.css';

const User = () => {

    const [firstname, setFirstname] = useState('Thibaud');
    const [lastname, setLastname] = useState('Brault');
    const [dob, setDob] = useState('10-02-1999');
    const [city, setCity] = useState('Nantes');
    const [country, setCountry] = useState('France');
    const [gender, setGender] = useState('Male');

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        window.scrollTo(0, 0)
        if (data.firstname) {
            setFirstname(data.firstname)
        }
        if (data.lastname) {
            setLastname(data.lastname)
        }
        if (data.gender) {
            setGender(data.gender)
        }
        if (data.city) {
            setCity(data.city)
        }
        reset()
    };

    return (
        <main className="user">
            <section className="section section1">
                <div className="cards">
                    <div className="card1">
                        <img className="profile" src="https://randomuser.me/api/portraits/thumb/lego/6.jpg" alt="profile" />
                        <div className="cardInside">
                            <div className="img" />
                            <div className="info">
                                <p className="carac"><span>♥</span> coding</p>
                                <h2 className="name">{firstname} <br /> {lastname}</h2>
                                <p className="dob">{dob} - 23 ans</p >
                                <p className="location">{city}, <span>{country}</span></p>
                                <Link className="link" to="/profile">Vos messages ➜</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="card2">
                        <h2 className="destinations">Destinations</h2>
                        <ul className="list">
                            <li className="element">Damas, Syrie</li>
                            <li className="element">Kaboul, Afghanistan 💣</li>
                            <li className="element">Sanaa, Yémen</li>
                            <li className="element">Mogadiscio, Somalie 🏴‍☠️</li>
                            <li className="element">Djouba, Soudan du Sud</li>
                        </ul>
                    </div>
                </div>
                <a className="downBtn" href="#details">▾ parameters ▾</a>
            </section>
            <section className="section section2">
                <div id="details" className="details">
                    <h2>Modify your profile</h2>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="formContainer">
                            <div className="formInner firstname">
                                <label htmlFor="firstname">Change first name</label>
                                <input type="text" name="firstname" id="firstname" placeholder="New firstname" {...register("firstname")} />
                            </div>
                            <div className="formInner lastname">
                                <label htmlFor="lastname">Change last name</label>
                                <input type="text" name="lastname" id="lastname" placeholder="New lastname" {...register("lastname")} />
                            </div>
                        </div>
                        <div className="formContainer">
                            <div className="formInner gender">
                                <label htmlFor="sexe">Change gender</label>
                                <select name="gender" id="gender" {...register("gender")}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="formContainer">
                            <div className="formInner city">
                                <label htmlFor="name">Change city</label>
                                <input type="text" name="city" id="city" placeholder="New city" {...register("city")} />
                            </div>
                        </div>
                        <input className="submitBtn" type="submit" value="Envoyer ✈" />
                    </form>
                </div>
            </section>
        </main>
    );
};

export default User;
