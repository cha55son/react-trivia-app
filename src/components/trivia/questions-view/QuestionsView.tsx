import "./QuestionsView.scss";

import { TriviaQuestion } from "../../../App";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { shuffle } from "underscore";
import { useNavigate } from "react-router-dom";
import { Block, BlockTitle, Button, Progressbar } from "konsta/react";
import Swirl from "../../effects/Swirl";

interface QuestionsViewParams {
    answerDuration: number;
    questions: TriviaQuestion[];
    setAttempted: Dispatch<SetStateAction<number>>;
    setCorrectAnswers: Dispatch<SetStateAction<number>>;
    complete: () => void;
}

function QuestionsView(params: QuestionsViewParams) {
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [streak, setStreak] = useState(0);
    const [timerInterval, setTimerInterval] = useState(-1);

    const question = params.questions.length > 0 && currentQuestionIdx < params.questions.length ? params.questions[currentQuestionIdx] : null;
    const randomAnswers = useMemo(() => shuffle(question ? [...question.incorrect_answers, question.correct_answer] : []), [currentQuestionIdx]);
    const progress = (currentQuestionIdx + 1) / params.questions.length;

    useEffect(() => {
        if (currentQuestionIdx >= params.questions.length) {
            params.complete();
        }
    }, [currentQuestionIdx]);
    useEffect(() => {
        if (!question) return;
        const interval = setInterval(() => {
            submitAnswer("___");
            resetTimer();
        }, params.answerDuration);
        setTimerInterval(interval as any);
        return () => resetTimer();
    }, [currentQuestionIdx]);

    const resetTimer = () => {
        setTimerInterval(interval => {
            if (interval !== -1) clearInterval(interval);
            return -1;
        });
    };
    const submitAnswer = (answer: string) => {
        if (selectedAnswer !== null) return;
        setSelectedAnswer(answer);
        setTimeout(() => moveToNextQuestion(answer), 1000);
    };
    const moveToNextQuestion = (answer: string) => {
        params.setAttempted(count => count + 1);
        if (answer === question?.correct_answer) {
            params.setCorrectAnswers(count => count + 1);
            setStreak(s => s + 1);
        } else {
            setStreak(0);
        }
        resetTimer();
        setSelectedAnswer(null);
        setCurrentQuestionIdx(idx => idx + 1);
    };

    return (
        <>
            <Swirl className="absolute inset-0"></Swirl>
            <div className="flex flex-col h-full relative">
                <div className="flex items-center m-4">
                    <Progressbar className="flex-1 mr-2" progress={progress} />
                    <span>{currentQuestionIdx + 1} of {params.questions.length}</span>
                </div>
                {question && (<>
                    <div className="flex-1 flex flex-col justify-center min-h-[25%]">
                        <BlockTitle>{question.category}</BlockTitle>
                        <Block>
                            <p className="text-2xl text-center" dangerouslySetInnerHTML={ { __html: question.question } }></p>
                        </Block>
                    </div>
                    <div className="flex w-full items-center p-4">
                        <p className="text-2xl h-9 w-9 flex items-center justify-center rounded-lg bg-ios-light-surface-1 dark:bg-ios-dark-surface-1">{streak}</p>
                        <div className="flex-1"></div>
                        <div className={`self-end pie-timer ${timerInterval !== -1 ? "animate" : ""}`} style={{ animationDuration: params.answerDuration + 'ms' }}></div>
                    </div>
                    <div className="mx-4 flex flex-col gap-y-4 mb-4">
                        {randomAnswers.map(answer => {
                            const isWrongAnswer = selectedAnswer === answer && answer !== question?.correct_answer;
                            const isCorrectAnswer = selectedAnswer !== null && answer === question?.correct_answer;
                            const className = isWrongAnswer ? 'k-color-brand-red' : (isCorrectAnswer ? 'k-color-brand-green' : '');
                            return (<Button large rounded outline onClick={() => submitAnswer(answer)} key={answer} className={className}
                            dangerouslySetInnerHTML={ { __html: answer } }></Button>);
                        })}
                    </div>
                </>)}
            </div>
        </>
    );
}

export default QuestionsView;