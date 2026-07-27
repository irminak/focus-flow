import { useState } from "react";
import type { Task } from "../types/task";
import Timer from "./Timer";
import type { SessionEndReason } from "../types/session";
import SessionSummaryView from "./SessionSummaryView";

const FocusView = ({ task, handleGoBack }: { task: Task; handleGoBack: () => void }) => { 
    const [isFinished, setIsFinished] = useState(false);
    const [sessionEndReason, setSessionEndReason] = useState<SessionEndReason | null>(null);    
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
                    <Timer task={task} onFinish={()=>{
                        setSessionEndReason('timeout');
                        setIsFinished(true);
                    }} />
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