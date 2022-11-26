import { createAsyncThunk } from "@reduxjs/toolkit";
import { Difficulty } from "./trivia.types";
import TriviaServiceImpl from "../../services/TriviaService";

export const fetchQuestions = createAsyncThunk('trivia/fetchQuestions', async (difficulty: Difficulty) => {
        return await TriviaServiceImpl.getQuestions(difficulty);
    }
)