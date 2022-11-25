import React, { useState } from "react";
import "../styles/MiniCard.css";
import logoFemme from "../assets/kisspng-female.png";
import logoHomme from "../assets/male.png";
import { Link } from "react-router-dom";

const MiniCard = ({ user }) => {
    const [isFavorite, setisFavorite] = useState(false);

    function handleClickFavorite() {
        setisFavorite(!isFavorite);
    }

    return (
        <div>
            <Link to="/card" state={{ user }}>
                <div className="carte-profil">
                    <div className="cadre-photo">
                        <div className="sexe">
                            {user.gender === "female" ? (
                                <img
                                    className="femme"
                                    src={logoFemme}
                                    alt="f"
                                />
                            ) : (
                                <img
                                    className="homme"
                                    src={logoHomme}
                                    alt="M"
                                />
                            )}
                        </div>

                        <div
                            id="favorite"
                            onClick={handleClickFavorite}
                            className={
                                isFavorite ? "isFavorite" : "notFavorite"
                            }
                        />

                        <img
                            className="personne"
                            src={user.picture.large}
                            alt="vous"
                        />
                    </div>

                    <div className="descriptif">
                        <div className="identite">
                            <div className="firtsName">{user.name.first}</div>
                            <div className="age">{user.dob.age} ans.</div>
                        </div>

                        <div className="pays">
                            {user.location.country}, {user.location.city}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MiniCard;
