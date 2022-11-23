import { Fab, Page } from "konsta/react";
import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();
    return (
        <Page className="flex items-center justify-center">
            <h1 className="text-4xl">Hello, Trivia!</h1>
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
