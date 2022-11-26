import "./Scoreboard.scss";
import { Card, Fab, Page } from "konsta/react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectAttempted, selectCorrect, selectMaxStreak } from "../../store/trivia/trivia.selectors";

function Scoreboard() {
    const correct = useAppSelector(selectCorrect);
    const attempted = useAppSelector(selectAttempted);
    const maxStreak = useAppSelector(selectMaxStreak);

    const points = correct * 10;
    const streak = maxStreak * 10;
    const total = points + streak;
    const navigate = useNavigate();
    return (
        <Page className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-center pb-8 mb-8 mx-4 border-b-2" style={ { color: '#CE3765', borderColor: '#CE3765' } }>Final</h1>
            <p className="text-center text-4xl font-bold mb-2">{correct} of {attempted}</p>
            <p className="text-center text-xl mb-4">Answered correctly</p>
            <Card>
                <div className="flex mb-4 text-2xl">
                    <p className="flex-1">Points</p>
                    <p className="flex-1 text-end">{points.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</p>
                </div>
                <div className="flex mb-4 text-2xl">
                    <p className="flex-1">Streak</p>
                    <p className="flex-1 text-end">+{streak.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</p>
                </div>
                <div className="border-b-2 border-black mb-4"></div>
                <div className="flex text-2xl font-semibold">
                    <p className="flex-1">Total Score</p>
                    <p className="flex-1 text-end">{total.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</p>
                </div>
            </Card>
            <Fab
                className="fixed left-1/2 bottom-4-safe transform -translate-x-1/2 z-20"
                text="Play Again?"
                textPosition="after"
                onClick={() => navigate("/options")}
            />
        </Page>
    );
}

export default Scoreboard;