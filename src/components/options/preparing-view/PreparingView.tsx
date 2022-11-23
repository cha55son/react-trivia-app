import { Difficulty, TriviaQuestion } from "../../../App";
import { Dispatch, SetStateAction, useEffect } from "react";

interface PreparingViewParams {
     difficulty: Difficulty;
     setQuestions: Dispatch<SetStateAction<TriviaQuestion[]>>;
     complete: () => void;
}

function PreparingView(params: PreparingViewParams) {
    const waitDuration = 2000;
    useEffect(() => {
        setTimeout(() => params.complete(), waitDuration);
    }, []);
    return (
        <>
            <h1 className="text-4xl text-center">Scouring the cosmos for questions</h1>
        </>
    );
}

export default PreparingView;

