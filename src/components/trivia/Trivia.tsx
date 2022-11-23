import { TriviaQuestion } from "../../App";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import StartingView from "./starting-view/StartingView";
import QuestionsView from "./questions-view/QuestionsView";
import { Page } from "konsta/react";

interface TriviaParams {
    answerDuration: number;
    questions: TriviaQuestion[];
    setAttempted: Dispatch<SetStateAction<number>>;
    setCorrectAnswers: Dispatch<SetStateAction<number>>;
}

function Trivia(params: TriviaParams) {
    const [inStartingView, setInStartingView] = useState<boolean>(true);
    const navigate = useNavigate();
    useEffect(() => didMount(navigate, params), []);

    const goToScoreboard = () => navigate("/scoreboard");
    return (
        <Page className="flex flex-col justify-center">
            {inStartingView ?
                <StartingView complete={() => setInStartingView(false)} /> :
                <QuestionsView questions={params.questions} answerDuration={params.answerDuration}
                               setAttempted={params.setAttempted} setCorrectAnswers={params.setCorrectAnswers}
                                complete={() => goToScoreboard()}/>
            }
        </Page>
    );
}

function didMount(navigate: NavigateFunction, params: TriviaParams) {
    if (params.questions.length > 0) return;
    navigate("/options");
}

export default Trivia;