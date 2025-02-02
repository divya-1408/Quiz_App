import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();

    const startQuiz = () => {
        navigate("/quiz");
    };

    return (
        <div className="home-container" 
        style={{    background: "linear-gradient(to bottom,rgb(10, 8, 27) 0%,rgb(10, 10, 23)50%,rgb(38, 21, 151) 100%)" }}>
            <header className="home-header">
                <h1>Welcome to the Quiz Challenge</h1>
                <p>Test your knowledge and challenge yourself!</p>
            </header>
            <div className="home-content">
                <button className="start-btn" onClick={startQuiz}>
                    Start Quiz
                </button>
            </div>
            <footer className="home-footer" >
                <p>Created with ❤️ by Testline!</p>
            </footer>
        </div>
    );
};

export default Home;
