import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Trivia from "./components/trivia/Trivia";
import Options from "./components/options/Options";
import Scoreboard from "./components/scoreboard/Scoreboard";
import { App as AppWrapper } from 'konsta/react';

export type Difficulty = "easy" | "medium" | "hard";

export interface TriviaQuestion {
    category: string;
    type: "multiple" | "boolean";
    difficulty: Difficulty;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

function App() {
    const [difficulty, setDifficulty] = useState<Difficulty>("medium");
    const [answerDuration, setAnswerDuration] = useState<number>(10000);
    const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
    const [attempted, setAttempted] = useState<number>(0);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);

    return (
        <AppWrapper theme="ios">
            <BrowserRouter>
                <Routes>
                    <Route path="/trivia" element={<Trivia questions={questions} answerDuration={answerDuration}
                                                           setAttempted={setAttempted}
                                                           setCorrectAnswers={setCorrectAnswers}/>}/>
                    <Route path="/scoreboard" element={<Scoreboard questions={questions} attempted={attempted}
                                                                   correctAnswers={correctAnswers}/>}/>
                    <Route path="/options"
                           element={<Options setQuestions={setQuestions}
                                             difficulty={difficulty} setDifficulty={setDifficulty}
                                             answerDuration={answerDuration} setAnswerDuration={setAnswerDuration}
                                             setAttempted={setAttempted} setCorrectAnswers={setCorrectAnswers}/>}/>
                    <Route path="/" element={<Landing />}/>
                </Routes>
            </BrowserRouter>
        </AppWrapper>
    );
}

export default App;
