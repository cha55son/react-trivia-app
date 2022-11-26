import React, { useEffect } from "react";
import { Block, BlockTitle, Fab, List, ListItem, Page, Range, Segmented, SegmentedButton } from "konsta/react";
import { useNavigate } from "react-router-dom";
import { selectAnswerDuration, selectDifficulty } from "../../store/trivia/trivia.selectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { reset, setAnswerDuration, setDifficulty } from "../../store/trivia/trivia.slice";
import { fetchQuestions } from "../../store/trivia/trivia.thunks";

function Options() {
    const difficulty = useAppSelector(selectDifficulty);
    const answerDuration = useAppSelector(selectAnswerDuration);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(reset());
    }, []);

    const startNewGame = async () => {
        await dispatch(fetchQuestions(difficulty));
        navigate("/trivia");
    };

    return (
        <Page className="flex flex-col justify-center">
            <BlockTitle>Select your difficulty</BlockTitle>
            <Block>
                <Segmented strong rounded>
                    <SegmentedButton strong rounded active={difficulty === "easy"}
                                     onClick={() => dispatch(setDifficulty("easy"))}>Easy</SegmentedButton>
                    <SegmentedButton strong rounded active={difficulty === "medium"}
                                     onClick={() => dispatch(setDifficulty("medium"))}>Medium</SegmentedButton>
                    <SegmentedButton strong rounded active={difficulty === "hard"}
                                     onClick={() => dispatch(setDifficulty("hard"))}>Hard</SegmentedButton>
                </Segmented>
            </Block>
            <BlockTitle>{answerDuration / 1000} seconds per question</BlockTitle>
            <List strong insetMaterial outlineIos>
                <ListItem
                    innerClassName="flex space-x-4"
                    innerChildren={
                        <>
                            <span>3</span>
                            <Range
                                value={answerDuration / 1000}
                                min={3}
                                step={1}
                                max={20}
                                onChange={(e) => dispatch(setAnswerDuration((e.target as any).value * 1000))}
                            />
                            <span>20</span>
                        </>
                    }
                />
            </List>
            <Fab
                className="fixed left-1/2 bottom-4-safe transform -translate-x-1/2 z-20"
                onClick={() => startNewGame()}
                text="Start Game"
                textPosition="after"
            />
        </Page>
    );
}

export default Options;