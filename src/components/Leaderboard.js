import React from "react";
import { Link } from "react-router-dom";
import "./Leaderboard.css";

function Leaderboard() {
    return (
        <div className="leaderboard-container">
            <h2>Leaderboard</h2>
            <p>🏆 Top Player: Alice - 90 points</p>
            <p>🥈 Bob - 80 points</p>
            <p>🥉 Charlie - 70 points</p>
            <Link to="/"> 
                <button>Back to Home</button>
            </Link>
        </div>
    );
}

export default Leaderboard;
