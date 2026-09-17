import type { SessionEndReason } from "../types/session";
import type { Task } from "../types/task";
const SessionSummaryView = ({ sessionEndReason, task, remainingTime, onResume, onComplete, onContinueLater }: { sessionEndReason: SessionEndReason | null; task: Task; remainingTime: number ; onResume: () => void; onComplete: (taskId: number) => void; onContinueLater: (taskId: number, remainingTime: number) => void }) => {
    // trzeba przekazac jak zostala zakonczona sesja (end czy timeout) oraz ile czasu pracowalismy

    const workedSeconds = task.duration * 60 - remainingTime;
    
  return (
  <>
    {sessionEndReason === "timeout" ? (
        <div>
            <h1>Focus session completed !</h1>
            <p>You worked for {task.duration} {task.duration === 1 ? "minute" : "minutes"}</p>
            <p>What do you want to do now?</p>
            <button onClick={() => onComplete(task.id)}>Mark task as done</button>
            <button onClick={onResume}>Start another session</button>
        </div>
        ) : sessionEndReason === 'manual' ? (
        <div>
            <h1>Focus Session Ended !</h1>
            <p>
                You worked for{" "}
                {workedSeconds < 60 ? `${workedSeconds} ${workedSeconds === 1 ? "second" : "seconds"}`: `${Math.floor(workedSeconds / 60)} ${Math.floor(workedSeconds / 60) === 1 ? "minute" : "minutes"}`}
            </p>
            <p>Did You complete the task?</p>
            <button onClick={() => onComplete(task.id)}>Mark task as done</button>
            <button onClick={() => onContinueLater(task.id, remainingTime)}>Continue later </button>
        </div>
    ) : (<div>null</div>)} 
    </>
  )
}

export default SessionSummaryView