import React from "react";
import { useLocation,  useNavigate } from "react-router-dom";
import "./Result.css";

function Result() {
    const location = useLocation();
    const navigate = useNavigate();

    const { answers = {}, quizData = { questions: [] } } = location.state || {};

    let score = 0;

    const calculateScore = () => {
        quizData.questions.forEach((question) => {
            const userAnswer = answers[question.id];
            const correctOption = question.options.find((option) => option.is_correct);
            if (userAnswer === correctOption?.description) {
                score += 1;
            }
        });
    };

    if (!location.state) {
        return (
            <div className="result-container">
                <h2>No quiz data found</h2>
                <p>It looks like you haven't taken a quiz yet.</p>
                <button className="back-home-button" onClick={() => navigate("/")}>
                    Go to Home
                </button>
            </div>
        );
    }

    calculateScore();

    return (
        <div className="result-container">
            <br />
            <h2>Quiz Results</h2>
            <div className="scoreyr">
                <p className="your-score">Your Score: {score} / {quizData.questions.length}</p>
            </div>
            <h3>Correct Answers</h3>
            {quizData.questions.map((q, index) => {
                const correctOption = q.options.find(option => option.is_correct);
                return (
                    <div key={index} className="question-result">
                        <p>{q.description}</p>
                        <p className="your-answer">Your answer: {answers[q.id] || "Not answered"}</p>
                        <p className="correct-answer">Correct answer: {correctOption?.description}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Result;
