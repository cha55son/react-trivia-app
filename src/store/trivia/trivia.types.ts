export type Difficulty = "easy" | "medium" | "hard";

export interface TriviaQuestion {
    category: string;
    type: "multiple" | "boolean";
    difficulty: Difficulty;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface TriviaState {
    difficulty: Difficulty;
    answerDuration: number;
    questions: TriviaQuestion[];
    attempted: number;
    correct: number;
    currentStreak: number;
    maxStreak: number;
}
