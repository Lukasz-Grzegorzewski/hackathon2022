import React, { useEffect, useState } from "react";
import axios from "axios";
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
    const [gender, setGender] = useState('all');
    const filterPeople = () => {
        let genderFiltered = [];
        if (gender === "all") { return setFiltered(allPeople) } else {
            for (let i = 0; i < allPeople.length; i++) {
                if (allPeople[i].gender === gender) {
                    genderFiltered.push(allPeople[i])
                }
            } return setFiltered(genderFiltered)
        }
    }
    useEffect(() => {
        filterPeople()
    }, [gender])
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
            </div>
            {filtered.map((people, index) => <p key={index}>{people.name.first}</p>)}
        </div>
    );
};

export default Home;