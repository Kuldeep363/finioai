import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface Stopwatch {
    className?: string;
    textClassName?: string;
}

const Stopwatch: React.FC<Stopwatch> = ({ className, textClassName }) => {
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(true);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
            setTime(0); // Reset time on unmount
        };
    }, [isRunning]);

    const formatTime = (seconds: number): string => {
        const hrs = Math.floor(seconds / 3600)
            .toString()
            .padStart(2, "0");
        const mins = Math.floor((seconds % 3600) / 60)
            .toString()
            .padStart(2, "0");
        const secs = (seconds % 60).toString().padStart(2, "0");
        return `${hrs}:${mins}:${secs}`;
    };

    return (
        <div
            className={clsx(className)}
        >
            <p className={clsx(textClassName)}>
                {formatTime(time)}
            </p>
        </div>
    );
};

export default Stopwatch;
