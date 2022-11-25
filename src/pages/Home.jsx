import React, { useEffect, useState } from "react";
import axios from "axios";
import MiniCard from "../components/MiniCard";
import "../styles/home.css";
import imageC from "../assets/camera.jpg";

const Home = () => {
    const [allPeople, setAllPeople] = useState([]);

    const getAllPeople = () => {
        axios
            .get(
                "https://randomuser.me/api/?inc=gender,name,location,dob,picture&results=500"
            )
            .then((response) => response.data)
            .then((data) => {
                setAllPeople(data.results);
            })
            .catch((error) => {
                console.error(error.message);
            });
    };
    useEffect(() => {
        getAllPeople();
    }, []);

    const [gender, setGender] = useState("");
    const [location, setLocation] = useState("");
    const [age, setAge] = useState("all")
    const getUnique = (array) => {
        let unique = [];

        for (let i = 0; i < array.length - 1; i++) {
            unique.push(array[i].location.country);
        }

        unique = unique
            .map((each, i, X) => X.indexOf(each) === i && i)
            .filter((each) => unique[each])
            .map((each) => unique[each])
            .sort(function compare(a, b) {
                if (a < b) return -1;
                else if (a > b) return 1;
                return 0;
            });

        return unique;
    };
    return (
        <div>
            <div>
                <img className="bandeauImage" src={imageC} alt="bandeauImage" />
            </div>
            <div className="filtersContainer">
                <h2>Filtrer par...</h2>
                <div className="genderFilter">
                    <h4>Genre</h4>
                    <select onChange={(e) => setGender(e.target.value)}>
                        <option value="all">Tous</option>
                        <option value="female">Femmes</option>
                        <option value="male">Hommes</option>
                    </select>
                </div>
                <div className="ageFilter">
                    <h4>Âge</h4>
                    <div className="ageFilterContainer">
                        <select onChange={(e) => setAge(e.target.value)}>
                            <option value="all">Tous</option>
                            <option value="30">18-30 ans</option>
                            <option value="45">30-45 ans</option>
                            <option value="60">45-60 ans</option>
                            <option value="75">60-75 ans</option>
                            <option value="90">75-90 ans</option>
                        </select>
                    </div>
                </div>
                <div className="countryFilter">
                    <h4>Localisation</h4>
                    <select onChange={(e) => setLocation(e.target.value)}>
                        <option value="">Tous</option>
                        {getUnique(allPeople).map((each, index) => (
                            <option key={index} value={each}>{each}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                {allPeople
                    .filter((each) => gender !== "all" ? each.gender === gender : each.gender.includes('male'))
                    .filter((each) =>
                        each.location.country.includes(location)
                    ).filter((each) => age !== "all" ? each.dob.age <= age && each.dob.age > (age - 15) : each.dob.age <= 90)
                    .map((user, index) => (
                        <MiniCard key={index} user={user} />
                    ))
                }
            </div>
        </div>
    );
};

export default Home;
