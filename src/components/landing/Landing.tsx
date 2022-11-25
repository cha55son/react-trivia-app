import { Fab, Page } from "konsta/react";
import { useNavigate } from "react-router-dom";
import Waves from "../effects/Waves";

function Landing() {
    const navigate = useNavigate();
    return (
        <Page className="flex flex-col items-center justify-center">
            <Waves className="absolute inset-0"></Waves>
            <h1 className="text-4xl relative mb-4">Hello, Trivia!</h1>
            <p className="text-md relative text-center">
                Animations by <a href="https://jfire.io/animations/" target="_blank" className="underline">jfire</a>
            </p>
            <Fab
                className="fixed left-1/2 bottom-4-safe transform -translate-x-1/2 z-20"
                text="New Game"
                textPosition="after"
                onClick={() => navigate("/options")}
            />
        </Page>
    );
}

export default Landing;
