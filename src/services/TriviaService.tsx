import { Difficulty, TriviaQuestion } from "../App";

const TRIVIA_URL = "https://opentdb.com/api.php";
const defaultParams = { amount: "10", difficulty: "easy" };

interface TriviaService {
    getQuestions(difficulty: Difficulty): Promise<TriviaQuestion[]>;
}

function getQuestions(difficulty: Difficulty): Promise<TriviaQuestion[]> {
    const url = new URL(TRIVIA_URL);
    url.search = new URLSearchParams({ ...defaultParams, difficulty }).toString();
    return fetch(url)
        .then(response => response.json())
        .then(data => data.results);
}

const TriviaServiceImpl: TriviaService = { getQuestions };
export default TriviaServiceImpl;