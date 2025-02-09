import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Quiz App</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/quiz">Quiz</Link></li>
                <li><Link to="/result">Results</Link></li>
                <li><Link to="/leaderboard">Leaderboard</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
