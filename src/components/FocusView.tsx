import type { Task } from "../types/task";

const FocusView = ({ currentTask, handleGoBack }: { currentTask: Task | undefined; handleGoBack: () => void }) => { 
  return (
    <div>
        <button onClick={handleGoBack}>Go back</button>
        <div>Current task</div>
        {currentTask && (
            <div>
                <h3>{currentTask.title}</h3>
                <p>Category: {currentTask.category}</p>
                <p>Duration: {currentTask.duration} minutes</p>
                <p>Deadline: {currentTask.deadline}</p>
                <p>Status: {currentTask.status}</p>
            </div>
        )}
    </div>
    
  )
}

export default FocusView