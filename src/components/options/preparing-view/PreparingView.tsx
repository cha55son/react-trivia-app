import { useEffect } from "react";

interface PreparingViewParams {
     complete: () => void;
}

function PreparingView(params: PreparingViewParams) {
    const waitDuration = 2000;
    useEffect(() => {
        setTimeout(() => params.complete(), waitDuration);
    }, []);
    return (
        <>
            <h1 className="text-3xl text-center">Scouring the cosmos for questions</h1>
        </>
    );
}

export default PreparingView;

