import React, { useState } from "react";
import "../styles/card.css";
import Message from "../components/BigCard/Message";

import logoFemme from "../assets/kisspng-female.png";
import logoHomme from "../assets/male.png";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Card = ({ user }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const [oneMessage, setOneMessage] = useState("");
    const [allMessage, setAllMessage] = useState([]);

    // ouverture - fermeture
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

    // ---

    const handleChangeOneMessage = (event) => {
        setOneMessage(event.target.value);
    };

    const handleEmoji = (emoji) => {
        setOneMessage((oldArray) => oldArray + emoji);
    };

    // ---

    const envoieMessage = (event) => {
        event.preventDefault();
        if (oneMessage !== "") {
            setAllMessage((oldArray) => [...oldArray, oneMessage]);
            setEmote(!emote);
        }
        setOneMessage("");
    };

    return (
        <div className="big-card">
            <div className="container-image">
                <img src={user.picture.large} alt="utilisateur" />
                <div className="gender-user">
                    {user.gender === "male" ? (
                        <img src={logoHomme} alt="M" />
                    ) : (
                        <img src={logoFemme} alt="F" />
                    )}

                    <div
                        className={isFavorite ? "isFavorite" : "notFavorite"}
                        onClick={() => handleFavorite()}
                    ></div>
                </div>
            </div>

            <div className="container-info">
                <h3>{user.name.first}</h3>
                <p>{user.dob.age} ans</p>
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

                    <div className="bas-droite">
                        <button onClick={() => handleEmote()}>emote</button>
                        {emote ? (
                            <div className="emote">
                                <Picker
                                    data={data}
                                    onEmojiSelect={(obj) =>
                                        handleEmoji(obj.native)
                                    }
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
