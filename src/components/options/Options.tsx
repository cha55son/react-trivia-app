import React, { useEffect, useState } from "react";
import OptionsView from "./options-view/OptionsView";
import PreparingView from "./preparing-view/PreparingView";
import { Page } from "konsta/react";
import { useNavigate } from "react-router-dom";
import { selectDifficulty } from "../../store/trivia/trivia.selectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { reset } from "../../store/trivia/trivia.slice";
import { fetchQuestions } from "../../store/trivia/trivia.thunks";

function Options() {
    const difficulty = useAppSelector(selectDifficulty);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [preparingGame, setPreparingGame] = useState<boolean>(false);

    useEffect(() => {
        dispatch(reset());
    }, []);

    const startNewGame = async () => {
        await dispatch(fetchQuestions(difficulty));
        navigate("/trivia");
    };

    return (
        <Page className="flex flex-col justify-center">
            {!preparingGame ?
                <OptionsView complete={() => setPreparingGame(true)} /> :
                <PreparingView complete={startNewGame} />
            }
        </Page>
    );
}


export default Options;
