import "./Scoreboard.scss";
import { TriviaQuestion } from "../../App";
import { Card, Fab, Page } from "konsta/react";
import { useNavigate } from "react-router-dom";

interface ScoreboardParams {
     questions: TriviaQuestion[];
     attempted: number;
     correctAnswers: number;
}

function Scoreboard(params: ScoreboardParams) {
    const navigate = useNavigate();
    return (
        <Page className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-center pb-8 mb-8 mx-4 border-b-2" style={ { color: '#CE3765', borderColor: '#CE3765' } }>Final</h1>
            <p className="text-center text-4xl font-bold mb-2">{params.correctAnswers} of {params.attempted}</p>
            <p className="text-center text-xl mb-4">Answered correctly</p>
            <Card>
                <div className="flex mb-4 text-2xl">
                    <p className="flex-1">Points</p>
                    <p className="flex-1 text-end">{params.correctAnswers * 10}</p>
                </div>
                <div className="flex mb-4 text-2xl">
                    <p className="flex-1">Streak</p>
                    <p className="flex-1 text-end">+10</p>
                </div>
                <div className="border-b-2 border-black mb-4"></div>
                <div className="flex text-2xl">
                    <p className="flex-1">Total Score</p>
                    <p className="flex-1 text-end">1,000,000</p>
                </div>
            </Card>
            <Fab
                className="fixed left-1/2 bottom-4-safe transform -translate-x-1/2 z-20"
                text="Play Again?"
                textPosition="after"
                onClick={() => navigate("/options")}
            />

            {/*<div className="firework" id="firework1">*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*</div>*/}
            {/*<div className="firework" id="firework2">*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*</div>*/}
            {/*<div className="firework" id="firework3">*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*    <div className="explosion"></div>*/}
            {/*</div>*/}
        </Page>
    );
}

export default Scoreboard;