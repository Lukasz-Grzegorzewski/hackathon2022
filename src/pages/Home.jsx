import React from "react";
import MiniCard from "../components/MiniCard";
import "../styles/home.css";
import imageC from "../assets/camera.jpg";

function Home() {
    return (
        <main className="home">
            <img className="bandeauImage" src={imageC} alt="bandeauImage"/>
            <h1>AdopteUnGuide</h1>

            <div className="profil">
                <MiniCard 
                
                />
                <MiniCard 
                />
                <MiniCard 
                />
                <MiniCard 
                />
            </div>

        </main>
    );
}

export default Home;
