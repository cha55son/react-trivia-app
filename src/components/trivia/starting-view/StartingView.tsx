import "./StartingView.scss";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

function StartingView(params: { complete: () => void }) {
    const [countDown, setCountDown] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
           setCountDown(cd => cd - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
       if (countDown > 0) return;
       params.complete();
    }, [countDown]);

    return (
        <>
            <h1 className="text-center text-4xl">Get ready! Starting in</h1>
            <p className="self-center my-8 count-down-text">{countDown}</p>
        </>
    );
}

export default StartingView;