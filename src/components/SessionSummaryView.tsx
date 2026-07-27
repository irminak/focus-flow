
const SessionSummaryView = () => {
    // trzeba przekazac jak zostala zakonczona sesja (end czy timeout) oraz ile czasu pracowalismy
  return (
    <div>
        <h1>Focus Session Ended (Focus session completed) !</h1>
        <p>You worked for 25 minutes</p>
        <p>Did You complete the task? (What do you want to do now?)</p>
        <button>Mark task as done</button>
        <button>Continue later (Start another session)</button>
    </div>
  )
}

export default SessionSummaryView