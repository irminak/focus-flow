import { useEffect, useState } from "react";
import type { Task } from "../types/task";
import type { SessionEndReason } from "../types/session";
import SessionSummaryView from "./SessionSummaryView";

const FocusView = ({ task, handleGoBack }: { task: Task; handleGoBack: () => void }) => { 
    const [isRunning, setIsRunning] = useState(false);
    const [remainingTime, setRemainingTime] = useState(task ? task.duration * 60 : 0); // in seconds
    const [isFinished, setIsFinished] = useState(false);
    const [sessionEndReason, setSessionEndReason] = useState<SessionEndReason | null>(null);   
    
    const toggleTimer = () => {
        setIsRunning(previousState => !previousState);}

    useEffect(() => {
    if (!isRunning) return;
        
    const interval = setInterval(() => {
        setRemainingTime(prevTime => {
            if (prevTime <= 1) {
                setIsRunning(false);
                setSessionEndReason("timeout");
                setIsFinished(true);
                return 0;
            }

            return prevTime - 1;
        });
    }, 1000);

    return () => clearInterval(interval);
}, [isRunning]);
  return (
    <div>
        <button onClick={handleGoBack}>Go back</button>
        <div>Current task</div>
                <h3>{task.title}</h3>
                <p>Category: {task.category}</p>
                {isFinished ? (
                    <SessionSummaryView sessionEndReason={sessionEndReason} />
                ):(
                <div>
                    <div>
                        <h3>{Math.floor(remainingTime / 60)}:{String(remainingTime % 60).padStart(2, '0')}</h3>
                        <p> of {task.duration} minutes</p>
                        <button onClick={toggleTimer}>
                            {isRunning ? "Pause Focus" : "Start Focus"}
                        </button>
                    </div>
                    <p>Description: {task.description}</p>
                    <button onClick={() => {
                        setSessionEndReason('manual');
                        setIsFinished(true);
                    }}>
                        End session
                    </button>
                </div>
                )}
                
    </div>
    
  )
}

export default FocusView