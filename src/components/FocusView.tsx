import type { Task } from "../types/task";
import Timer from "./Timer";

const FocusView = ({ task, handleGoBack }: { task: Task | undefined; handleGoBack: () => void }) => { 
    
  return (
    <div>
        <button onClick={handleGoBack}>Go back</button>
        <div>Current task</div>
        {task && (
            <div>
                <h3>{task.title}</h3>
                <p>Category: {task.category}</p>
                <Timer task={task} />
                <p>Description: {task.description}</p>
            </div>
        )}
        <button>End session</button>
    </div>
    
  )
}

export default FocusView