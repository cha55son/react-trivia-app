import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Difficulty, TriviaQuestion } from "../../App";
import OptionsView from "./options-view/OptionsView";
import PreparingView from "./preparing-view/PreparingView";
import { Page } from "konsta/react";
import { useNavigate } from "react-router-dom";
import TriviaServiceImpl from "../../services/TriviaService";
import Tunnel from "../effects/Tunnel";

interface OptionsParams {
    setQuestions: React.Dispatch<React.SetStateAction<TriviaQuestion[]>>;
    difficulty: Difficulty;
    setDifficulty: React.Dispatch<React.SetStateAction<Difficulty>>;
    answerDuration: number;
    setAnswerDuration: React.Dispatch<React.SetStateAction<number>>;
    setAttempted: Dispatch<SetStateAction<number>>;
    setCorrectAnswers: Dispatch<SetStateAction<number>>;
}

function Options(params: OptionsParams) {
    const [preparingGame, setPreparingGame] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        params.setQuestions([]);
        params.setAttempted(0);
        params.setCorrectAnswers(0);
    }, []);

    const startNewGame = () => {
      TriviaServiceImpl.getQuestions(params.difficulty)
            .then(questions => params.setQuestions(questions))
            .then(() => navigate("/trivia"));
    };

    return (
        <Page className="flex flex-col justify-center">
            {!preparingGame ?
                <OptionsView difficulty={params.difficulty} setDifficulty={params.setDifficulty}
                             answerDuration={params.answerDuration} setAnswerDuration={params.setAnswerDuration}
                             complete={() => setPreparingGame(true)} /> :
                <PreparingView difficulty={params.difficulty} setQuestions={params.setQuestions} complete={startNewGame} />
            }
        </Page>
    );
}


export default Options;
