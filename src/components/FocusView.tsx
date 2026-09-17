import { useEffect, useState } from "react";
import type { Task } from "../types/task";
import type { SessionEndReason } from "../types/session";
import SessionSummaryView from "./SessionSummaryView";

const FocusView = ({ task, handleGoBack, onComplete, onStart, onResume, onContinueLater }: { task: Task; handleGoBack: () => void; onComplete: (taskId: number) => void; onStart: (taskId: number) => void; onResume: (taskId: number) => void; onContinueLater: (taskId: number, remainingTime: number) => void }) => { 
    const [isRunning, setIsRunning] = useState(false);
    const [remainingTime, setRemainingTime] = useState(task ? task.duration * 60 : 0); // in seconds
    const [isFinished, setIsFinished] = useState(false);
    const [sessionEndReason, setSessionEndReason] = useState<SessionEndReason | null>(null);   
    
    const handleStart =() => {
        setIsRunning(true);
        onStart(task.id);
    }

    const toggleTimer = () => {
        setIsRunning(previousState => !previousState);
    }

    const handleFinishSession = (reason: SessionEndReason) => {
        setSessionEndReason(reason);
        setIsFinished(true);
        setIsRunning(false);
    }

    const resumeSession = () => {
        setIsFinished(false);
        setSessionEndReason(null);
        setRemainingTime(task.duration * 60);
        setIsRunning(false);
        onResume(task.id);
    }

    const handleContinueLater = () => {
        setIsFinished(false);
        setSessionEndReason(null);
        setRemainingTime(remainingTime);
        setIsRunning(false);
        onContinueLater(task.id, remainingTime);
    }

    useEffect(() => {
    if (!isRunning) return;
        
    const interval = setInterval(() => {
        setRemainingTime(prevTime => {
            if (prevTime <= 1) {
                setIsRunning(false);
                handleFinishSession('timeout');
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
                    <SessionSummaryView sessionEndReason={sessionEndReason} task={task} remainingTime={remainingTime} onResume={resumeSession} onComplete={onComplete} onContinueLater={handleContinueLater} />
                ):(
                <div>
                    <div>
                        <h3>{Math.floor(remainingTime / 60)}:{String(remainingTime % 60).padStart(2, '0')}</h3>
                        <p> of {task.duration} minutes</p>
                        {task.status === 'todo' || task.status === 'completed' ? (<button onClick={handleStart}>Start</button> ): (<button onClick={toggleTimer}>
                            {isRunning ? "Pause" : "Resume"}
                        </button>)}
                    </div>
                    <p>Description: {task.description}</p>
                    <button onClick={() => {
                        handleFinishSession('manual');
                    }}>
                        End session
                    </button>
                </div>
                )}
                
    </div>
    
  )
}

export default FocusView