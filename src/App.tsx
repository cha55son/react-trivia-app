import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Trivia from "./components/trivia/Trivia";
import Options from "./components/options/Options";
import Scoreboard from "./components/scoreboard/Scoreboard";
import { App as AppWrapper } from 'konsta/react';

function App() {
    return (
        <AppWrapper theme="ios">
            <BrowserRouter>
                <Routes>
                    <Route path="/trivia" element={<Trivia />}/>
                    <Route path="/scoreboard" element={<Scoreboard />}/>
                    <Route path="/options" element={<Options />}/>
                    <Route path="/" element={<Landing />}/>
                </Routes>
            </BrowserRouter>
        </AppWrapper>
    );
}

export default App;
