import type { SessionEndReason } from "../types/session";
const SessionSummaryView = ({ sessionEndReason }: { sessionEndReason: SessionEndReason | null }) => {
    // trzeba przekazac jak zostala zakonczona sesja (end czy timeout) oraz ile czasu pracowalismy

    
  return (
  <>
    {sessionEndReason === "timeout" ? (
        <div>
            <h1>Focus session completed !</h1>
            <p>You worked for ... minutes</p>
            <p>What do you want to do now?</p>
            <button>Mark task as done</button>
            <button>Start another session</button>
        </div>
        ) : sessionEndReason === 'manual' ? (
        <div>
            <h1>Focus Session Ended !</h1>
            <p>You worked for ... minutes</p>
            <p>Did You complete the task?</p>
            <button>Mark task as done</button>
            <button>Continue later </button>
        </div>
    ) : (<div>null</div>)} 
    </>
  )
}

export default SessionSummaryView