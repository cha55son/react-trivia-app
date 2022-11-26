import { RootState } from "../store";

export const selectDifficulty = (state: RootState) => state.trivia.difficulty;
export const selectAnswerDuration = (state: RootState) => state.trivia.answerDuration;
export const selectQuestions = (state: RootState) => state.trivia.questions;
export const selectAttempted = (state: RootState) => state.trivia.attempted;
export const selectCorrect = (state: RootState) => state.trivia.correct;
export const selectStreak = (state: RootState) => state.trivia.currentStreak;
export const selectMaxStreak = (state: RootState) => state.trivia.maxStreak;
