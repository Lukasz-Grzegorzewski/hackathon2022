import React, { useState } from 'react';
import "../styles/MiniCard.css";
import logoFemme from "../assets/kisspng-female.png";
import logoHomme from "../assets/male.png";
import { Link } from 'react-router-dom';

const MiniCard = ({ user }) => {

    // const user = {
    //     "gender": "female",
    //     "name": {
    //         "title": "Ms",
    //         "first": "Gül",
    //     },
    //     "location": {
    //         "street": {
    //             "number": 2340,
    //             "name": "Talak Göktepe Cd"
    //         },
    //         "city": "Kocaeli",
    //         "state": "Karaman",
    //         "country": "Turkey",
    //         "postcode": 33292,
    //         "coordinates": {
    //             "latitude": "72.6116",
    //             "longitude": "0.2477"
    //         },
    //         "timezone": {
    //             "offset": "+3:00",
    //             "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
    //         }
    //     },
    //     "dob": {
    //         "age": 43
    //     },
    //     "picture": {
    //         "large": "https://randomuser.me/api/portraits/women/5.jpg",
    //         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/5.jpg"
    //     }
    // }

    const [isFavorite, setisFavorite] = useState(false);

    function handleClickFavorite() {
        setisFavorite(!isFavorite);
    }

    return (
        <div>
            <Link to="/card">
                <div className="carte-profil">
                    <div className='cadre-photo'>
                        <div className="sexe">{user.gender === "female" ? <img className="femme" src={logoFemme} alt="f" /> : <img className="homme" src={logoHomme} alt="M" />}</div>

                        <div id="favorite" onClick={handleClickFavorite}
                            className={isFavorite ? 'isFavorite' : 'notFavorite'} />

                        <img className="personne" src={user.picture.large} alt="vous" />
                    </div>

                    <div className='descriptif'>

                        <div className='identite'>
                            <div className='firtsName'>{user.name.first}</div>
                            <div className='age'>{user.dob.age} ans.</div>
                        </div>

                        <div className='pays'>{user.location.country}, {user.location.city}</div>

                    </div>
                </div>
            </Link>
        </div>
    );

};

export default MiniCard;