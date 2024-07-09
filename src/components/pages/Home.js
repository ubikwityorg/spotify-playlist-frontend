import React from "react";
import "./Home.css";
import waterfallVideo from "../../media/waterfall.mp4"; // Correct path to the video

export default function Home() {
    return (
        <div className="home">
            <video autoPlay muted loop className="background-video">
                <source src={waterfallVideo} type="video/mp4" />
            </video>
            <div className="content">
                <h1>Welcome to WorshipGen</h1>
                <p>Worship Gen is your go to app for curating setlists, or finding songs relating to a theme you want sing about!</p>
                <p>Just insert your keyword, view the results, and get listening to the playlist generated for you!</p>
            </div>
        </div>
    );
}
