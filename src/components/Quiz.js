import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Quiz.css";

const API_URL = "https://thingproxy.freeboard.io/fetch/https://api.jsonserve.com/Uw5CrX";

function Quiz() {
    const [quizData, setQuizData] = useState(null);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(API_URL)
            .then(response => setQuizData(response.data))
            .catch(error => console.error("Error fetching quiz data:", error));
    }, []);

    const handleChange = (questionId, option) => {
        setAnswers({ ...answers, [questionId]: option });
    };

    const handleSubmit = () => {
        navigate("/result", { state: { answers, quizData } });
    };

    if (!quizData) return <p>Loading quiz...</p>;

    return (
        <div className="quiz-container">
            <h2>{quizData.title}</h2>
            {quizData.questions.map((q, index) => (
                <div key={index} className="question-block">
                    <p>{q.description}</p> {}
                    {q.options.map((option, idx) => (
                        <label key={idx}>
                            <input
                                type="radio"
                                name={`question-${index}`}
                                value={option.description}
                                onChange={() => handleChange(q.id, option.description)}
                            />
                            {option.description}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit} className="submit-buton">Submit</button>
        </div>
    );
}

export default Quiz;
