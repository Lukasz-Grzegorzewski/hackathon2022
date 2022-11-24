import React, { useEffect, useState } from "react";
import axios from "axios";
import MultiRangeSlider from "multi-range-slider-react";
import "../styles/home.css";

const Home = () => {
    const [allPeople, setAllPeople] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const getAllPeople = () => {
        axios
            .get(
                "https://randomuser.me/api/?inc=gender,name,location,dob,picture&results=50",

            )
            .then((response) => response.data)
            .then((data) => {
                setAllPeople(data.results);
                setFiltered(data.results)
            })
            .catch((error) => {
                console.error(error.message);
            });
    }
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
    const [gender, setGender] = useState('all');
    const [location, setLocation] = useState('all');
    const filterPeople = () => {
        let genderFiltered = [];
        let locationFiltered = [];
        if (gender === 'all' && location === 'all') {
            setFiltered(allPeople)
        }
        else if (gender !== 'all' && location === 'all') {
            for (let i = 0; i < allPeople.length; i++) {
                if (allPeople[i].gender === gender) {
                    genderFiltered.push(allPeople[i])
                }
            } setFiltered(genderFiltered)
        }
        else if (gender === "all" && location !== "all") {
            for (let i = 0; i < filtered.length; i++) {
                if (filtered[i].location.country === location) {
                    locationFiltered.push(filtered[i])
                }
            }
            setFiltered(locationFiltered)
        }
        if (location !== "all" && gender !== 'all') {
            for (let i = 0; i < filtered.length; i++) {

            }
        }
    }
    useEffect(() => {
        filterPeople()
    }, [gender, location])
    return (
        <div>
            <h1>Home</h1>
            <div className="filtersContainer">
                <div className="genderFilter">
                    <h4>Genre</h4>
                    <select onChange={(e) => setGender(e.target.value)}>
                        <option value="all">Tous</option>
                        <option value="female">Femmes</option>
                        <option value="male">Hommes</option>
                    </select>
                </div>
                <div className="countryFilter">
                    <h4>Localisation</h4>
                    <select onChange={(e) => setLocation(e.target.value)}>
                        <option value="all">Tous</option>
                        {filtered.map((people, index) => <option key={index} value={people.location.country}>{people.location.country}</option>)}
                    </select>
                </div>
            </div>
            {filtered.map((people, index) => <p key={index}>{people.name.first}</p>)}
        </div>
    );
};

export default Home;