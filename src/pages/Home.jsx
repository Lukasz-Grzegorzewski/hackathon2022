import React, { useEffect, useState } from "react";
import axios from "axios";
import MiniCard from "../components/MiniCard";
import "../styles/home.css";
import imageC from "../assets/camera.jpg";

const Home = () => {
    const [allPeople, setAllPeople] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const getAllPeople = () => {
        axios
            .get(
                "https://randomuser.me/api/?inc=gender,name,location,dob,picture&results=50"
            )
            .then((response) => response.data)
            .then((data) => {
                setAllPeople(data.results);
                setFiltered(data.results);
                console.log(data.results);
            })
            .catch((error) => {
                console.error(error.message);
            });
    };
    useEffect(() => {
        getAllPeople();
    }, []);
    const [filteredLocations, setFilteredLocations] = useState(filtered.sort((a, b) => a.location.country > b.location.country ? 1 : a.location.country < b.location.country ? -1 : 0));
    const getLocations = (array) => {
        let filter = array
        for (let i = 0; i < filter.length - 1; i++) {
            if (filter[i].location.country === filter[i + 1].location.country) {
                filter.splice(i, 1)
            }
        } return setFilteredLocations(filter);
    };
    const [minValue, set_minValue] = useState(18);
    const [maxValue, set_maxValue] = useState(100);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    const [age, setAge] = useState('all');
    const [gender, setGender] = useState('all');
    const [location, setLocation] = useState('all');
    const filterPeople = () => {
        let genderFiltered = [];
        let locationFiltered = [];
        if (gender === "all" && location === "all") {
            setFiltered(allPeople);
        } else if (gender !== "all" && location === "all") {
            for (let i = 0; i < allPeople.length; i++) {
                if (allPeople[i].gender === gender) {
                    genderFiltered.push(allPeople[i]);
                }
            }
            setFiltered(genderFiltered);
        } else if (gender === "all" && location !== "all") {
            for (let i = 0; i < filtered.length; i++) {
                if (filtered[i].location.country === location) {
                    locationFiltered.push(filtered[i]);
                }
            }
            setFiltered(locationFiltered);
        }
        if (location !== "all" && gender !== "all") {
            for (let i = 0; i < filtered.length; i++) { }
        }
    };

    useEffect(() => {
        filterPeople();
    }, [gender, location]);

    const getUnique = (array) => {
        let unique = [];

        for (let i = 0; i < array.length - 1; i++) {
            unique.push(array[i].location.country);
        }

        unique = unique
            // pas compris cette partie =>
            .map((each, i, X) => X.indexOf(each) === i && i)
            .filter((each) => unique[each])
            .map((each) => unique[each])
            // <= pas compris cette partie

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
                            <option value="18-25">18-25 ans</option>
                            <option value="26-35">26-35 ans</option>
                            <option value="36-45">36-45 ans</option>
                            <option value="46-55">46-55 ans</option>
                            <option value="56-65">56-65 ans</option>
                            <option value="66-75">66-75 ans</option>
                            <option value="75-100">plus de 75 ans</option>
                        </select>
                    </div>
                </div>
                <div className="countryFilter">
                    <h4>Localisation</h4>
                    <select onChange={(e) => setLocation(e.target.value)}>
                        <option value="all">Tous</option>
                        {getUnique(allPeople).map((each) => (
                            <option value={each}>{each}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="profil">
                {filtered.map((user, index) => <MiniCard key={index} user={user} />)}

            </div>

        </div>
    );
};

export default Home;
