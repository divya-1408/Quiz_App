import React from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Leaderboard from "./components/Leaderboard";
import Navbar from "./components/Navbar";

function App() {
    const location = useLocation();
    return (
<>
{location.pathname !== "/" && <Navbar />}

        <Routes>  {}
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        </>
    );
}

export default App;
