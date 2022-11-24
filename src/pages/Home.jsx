import React, { useEffect, useState } from "react";
import axios from "axios";
import MultiRangeSlider from "multi-range-slider-react";
import "../styles/home.css";

const Home = () => {
    const [allPeople, setAllPeople] = useState([]);

    const getAllPeople = () => {
        axios
            .get(
                "https://randomuser.me/api/?inc=gender,name,location,dob,picture&results=50"
            )
            .then((response) => response.data)
            .then((data) => {
                setAllPeople(data.results);
                console.log(data.results);
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
                        <option value="">Tous</option>
                        {getUnique(allPeople).map((each) => (
                            <option value={each}>{each}</option>
                        ))}
                    </select>
                </div>
            </div>
            {gender !== "all"
                ? allPeople
                      .filter((each) => each.gender === gender)
                      .filter((each) =>
                          each.location.country.includes(location)
                      )
                      .map((people, index) => (
                          <p key={index}>{people.name.first}</p>
                      ))
                : allPeople
                      .filter((each) =>
                          each.location.country.includes(location)
                      )
                      .map((people, index) => (
                          <p key={index}>{people.name.first}</p>
                      ))}
        </div>
    );
};

export default Home;
