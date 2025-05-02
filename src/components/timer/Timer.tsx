import React, { useState, useEffect } from "react";

interface TimerProps {
    initialMinutes: number; // Initial time in minutes\
    handleTimerEnds: (state:string)=>void
}

const Timer: React.FC<TimerProps> = ({ initialMinutes, handleTimerEnds }) => {
    const initialTimeInSeconds = initialMinutes * 60; // Convert minutes to seconds
    const [timeInSeconds, setTimeInSeconds] =
        useState<number>(initialTimeInSeconds);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    // Start the timer automatically on mount
    useEffect(() => {
        const id = setInterval(() => {
            setTimeInSeconds((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(id); // Stop timer when it reaches 0
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
        
        setIntervalId(id);
        
        // Cleanup the interval when the component unmounts
        return () => {
            if (id) {
                clearInterval(id);
            }
        };
    }, []); // Empty dependency array to run once on mount
    useEffect(() => {
        if(timeInSeconds <= 0) handleTimerEnds("valid");
    },[timeInSeconds])

    // Format time to "MM:SS"
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${
            remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
        }`;
    };

    return <span className="font-bold text-primary">{formatTime(timeInSeconds)}</span>;
};

export default Timer;
