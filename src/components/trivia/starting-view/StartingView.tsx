import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

function StartingView(props: { complete: () => void }) {
    const controls = useAnimationControls();
    const [countDown, setCountDown] = useState(3);

    const sequence = async () => {
        await controls.start({ scale: [3, 1], opacity: [1, 0], transition: { duration: 1 } })
        setCountDown(cd => cd - 1);
    };

    useEffect(() => {
        if (countDown <= 0) props.complete();
        else sequence();
    }, [countDown]);

    return (
        <>
            <h1 className="text-center text-4xl">Get ready! Starting in</h1>
            <motion.p className="self-center my-8" animate={controls}>{countDown}</motion.p>
        </>
    );
}

export default StartingView;