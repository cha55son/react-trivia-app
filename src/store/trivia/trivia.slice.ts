import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Difficulty, TriviaState } from "./trivia.types";
import { fetchQuestions } from "./trivia.thunks";

const initialState: TriviaState = {
    difficulty: 'medium',
    answerDuration: 10000,
    questions: [],
    attempted: 0,
    correct: 0,
    currentStreak: 0,
    maxStreak: 0
};

const triviaSlice = createSlice({
    name: 'trivia',
    initialState: ({ ...initialState }),
    reducers: {
        reset: (state) => ({ ...initialState }),
        setDifficulty: (state, action: PayloadAction<Difficulty>) => {
            state.difficulty = action.payload;
        },
        setAnswerDuration: (state, action: PayloadAction<number>) => {
            state.answerDuration = action.payload;
        },
        incrementAttempted: (state) => {
            state.attempted += 1;
        },
        incrementCorrect: (state) => {
            state.correct += 1;
        },
        incrementStreak: (state) => {
            state.currentStreak += 1;
            state.maxStreak = Math.max(state.maxStreak, state.currentStreak);
        },
        resetStreak: state => {
            state.currentStreak = 0;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.questions = action.payload;
        });
    }
});

export const { setDifficulty, setAnswerDuration, reset, incrementAttempted, incrementCorrect, incrementStreak, resetStreak } = triviaSlice.actions;
export default triviaSlice.reducer;