import { Difficulty } from "../../../App";
import { Dispatch, SetStateAction } from "react";
import { Block, BlockTitle, Fab, List, ListItem, Range, Segmented, SegmentedButton } from "konsta/react";

interface OptionsViewParams {
    difficulty: Difficulty;
    setDifficulty: Dispatch<SetStateAction<Difficulty>>;
    answerDuration: number;
    setAnswerDuration: Dispatch<SetStateAction<number>>;
    complete: () => void;
}

function OptionsView(params: OptionsViewParams) {
    return (
        <>
            <BlockTitle>Select your difficulty</BlockTitle>
            <Block>
                <Segmented strong rounded>
                    <SegmentedButton strong rounded active={params.difficulty === "easy"} onClick={() => params.setDifficulty("easy")}>Easy</SegmentedButton>
                    <SegmentedButton strong rounded active={params.difficulty === "medium"} onClick={() => params.setDifficulty("medium")}>Medium</SegmentedButton>
                    <SegmentedButton strong rounded active={params.difficulty === "hard"} onClick={() => params.setDifficulty("hard")}>Hard</SegmentedButton>
                </Segmented>
            </Block>
            <BlockTitle>{params.answerDuration / 1000} seconds per question</BlockTitle>
            <List strong insetMaterial outlineIos>
                <ListItem
                    innerClassName="flex space-x-4"
                    innerChildren={
                        <>
                            <span>3</span>
                            <Range
                                value={params.answerDuration / 1000}
                                min={3}
                                step={1}
                                max={20}
                                onChange={(e) => params.setAnswerDuration((e.target as any).value * 1000)}
                            />
                            <span>20</span>
                        </>
                    }
                />
            </List>
            <Fab
                className="fixed left-1/2 bottom-4-safe transform -translate-x-1/2 z-20"
                onClick={() => params.complete()}
                text="Start Game"
                textPosition="after"
            />
        </>
    );
}

export default OptionsView;
