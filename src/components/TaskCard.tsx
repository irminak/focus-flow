import type { Task } from "../types/task"

const TaskCard = ({task, onCompleteTask}: { task: Task; onCompleteTask: (taskId: number) => void }) => {

  return (
    <li>
        <h3>{task.title}</h3>
        <p>Category: {task.category}</p>
        <p>Duration: {task.duration} minutes</p>
        <p>Deadline: {task.deadline}</p>
        <button onClick={() => onCompleteTask(task.id)} >
            {task.completed ? "Completed" : "Mark as Done"}
        </button>
    </li>
  )
}

export default TaskCard