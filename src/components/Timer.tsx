import { useState, useEffect } from "react";
import type { Task } from "../types/task";
const Timer = ({ task, onFinish }: { task: Task; onFinish: () => void }) => {
     const [remainingTime, setRemainingTime] = useState(task ? task.duration * 60 : 0); // in seconds
        const [isRunning, setIsRunning] = useState(false);
         const toggleTimer = () => {
        setIsRunning(previousState => !previousState);
    };

    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => {
                if ( prevTime <= 1 ){
                    setIsRunning(false);
                    onFinish();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    // const focusedTime = task.duration * 60 - remainingTime;

  return (
    <div>
        <h3>{Math.floor(remainingTime / 60)}:{String(remainingTime % 60).padStart(2, '0')}</h3>
        <p> of {task.duration} minutes</p>
        <button onClick={toggleTimer}>
            {isRunning ? "Pause Focus" : "Start Focus"}
        </button>
    </div>
  )
}

export default Timer