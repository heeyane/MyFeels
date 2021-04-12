import React from "react";
import { Link } from "react-router-dom";
import "../components/App/app.css";
import { Button } from "react-bootstrap";

import EmotionMap from "../utils/EmotionMap";

function Home({ entries }) {
    // wellbeing for most recent entries
    const calculateWellbeing = () => {
        if (entries) {
            const recent = entries.length > 5 ? entries.slice(Math.max(entries.length - 5, 0)) : entries;
            // get average in numbers
            const averageEmotions = EmotionMap.average(recent);
            // use numbers to gauge with descriptors
            const description = EmotionMap.descriptors(averageEmotions);
            // set wellbeing state
            return {
                mood: description.mood,
                energy: description.energy,
            };
        } else {
            return null;
        }
    };
    const wellbeing = calculateWellbeing();
    return (
        <main style={{ backgroundColor: "#BFE2FF" }}>
            <div className="flexbox-container" style={{ backgroundColor: "white" }}>
                <div className="container" style={{ clear: "both" }}>
                    <h2 style={{ color: "#FFC300", textAlign: "center" }}>
                        <em>Hi! How are you feeling today?</em>
                    </h2>
                    <br/>
                    <span>
                        <h3 style={{ color: "#007bff" }}>Recently:</h3>
                    </span>
                </div>
                <br/>
                {wellbeing ? (
                    <div className="container">
                        <h3 style={{ color: "#FFC300", textAlign: "center" }}> Mood is {wellbeing.mood} </h3>
                        <br/>
                        <h3 style={{ color: "#BFE2FF", textAlign: "center" }}> Energy is {wellbeing.energy}</h3>
                        <br/>
                    </div>
                ) : (
                    <div></div>
                )}
                <br/>
                <div className="container">
                    <Button color="primary" size="lg" block as={Link} to="/add">
                        New Entry
                    </Button>
                    <Button outline color="primary" size="lg" block as={Link} to="/review">
                        Review Past Entries
                    </Button>
                    <Button color="primary" size="lg" block as={Link} to="/learn">
                        Learn More
                    </Button>
                </div>
                <br/><br/><br/><br/><br/>
            </div>
        </main>
    )
}

export default Home;