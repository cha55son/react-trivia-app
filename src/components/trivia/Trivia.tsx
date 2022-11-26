import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import StartingView from "./starting-view/StartingView";
import QuestionsView from "./questions-view/QuestionsView";
import { Page } from "konsta/react";
import { useAppSelector } from "../../store/hooks";
import { selectQuestions } from "../../store/trivia/trivia.selectors";

function Trivia() {
    const questions = useAppSelector(selectQuestions);
    const navigate = useNavigate();

    const [inStartingView, setInStartingView] = useState<boolean>(true);

    useEffect(() => {
        if (questions.length > 0) return;
        navigate("/options");
    }, []);

    const goToScoreboard = () => navigate("/scoreboard");
    return (
        <Page className="flex flex-col justify-center">
            {inStartingView ?
                <StartingView complete={() => setInStartingView(false)} /> :
                <QuestionsView complete={() => goToScoreboard()}/>
            }
        </Page>
    );
}

export default Trivia;