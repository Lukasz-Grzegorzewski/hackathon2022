import React, { useState } from "react";
import "../styles/card.css";
import Message from "../components/BigCard/Message";

const Card = ({ user }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const [allMessage, setAllMessage] = useState([]);
    const [oneMessage, setOneMessage] = useState("");

    const [fichier, setFichier] = useState(false);
    const [emote, setEmote] = useState(false);

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const handleFichier = () => {
        setFichier(!fichier);
    };

    const handleEmote = () => {
        setEmote(!emote);
    };

    const handleChangeOneMessage = (event) => {
        setOneMessage(event.target.value);
    };

    const envoieMessage = (event) => {
        event.preventDefault();
        if (oneMessage !== "") {
            setAllMessage((oldArray) => [...oldArray, oneMessage]);
        }
        setOneMessage("");
    };

    return (
        <div className="big-card">
            <div className="container-image">
                <img src={user.picture.large} alt="utilisateur" />
                <div className="gender-user">
                    <p>{user.gender === "male" ? "M" : "F"}</p>
                    <div
                        className={isFavorite ? "isFavorite" : "notFavorite"}
                        onClick={() => handleFavorite()}
                    ></div>
                </div>
            </div>

            <div className="container-info">
                <p>
                    {user.name.first} - {user.dob.age}
                </p>
                <p>
                    {user.location.country} - {user.location.city}
                </p>
            </div>

            <div className="container-conversation">
                <div className="full-conversation">
                    <div className="start-conversation">
                        <p>
                            C'est le début de votre conversation avec{" "}
                            {user.name.first}
                        </p>
                    </div>
                    <p className="message right-conv">
                        Bonjour, ça va? Moi ouais
                    </p>
                    <p className="message left-conv">
                        au calme, on est là, tu connais"
                    </p>
                    {allMessage.map((each, index) => (
                        <Message key={index} each={each} />
                    ))}
                </div>

                <div className="bas-conversation">
                    <div className="bas-gauche">
                        <button onClick={() => handleFichier()}>+</button>
                        {fichier ? <div className="fichier"></div> : null}
                    </div>

                    <form
                        className="container-new-message"
                        onSubmit={(event) => envoieMessage(event)}
                    >
                        <textarea
                            name="message"
                            id="new-message"
                            placeholder="envoyer un message"
                            value={oneMessage}
                            onChange={(event) => handleChangeOneMessage(event)}
                        />
                        <button type="submit">Send</button>
                    </form>

                    <div className="bas-gauche">
                        <button
                            className="bas-droite"
                            onClick={() => handleEmote()}
                        >
                            emote
                        </button>
                        {emote ? <div className="emote"></div> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
