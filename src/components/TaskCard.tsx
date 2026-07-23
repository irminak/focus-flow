import type { Task } from "../types/task"

const TaskCard = ({task, onSelectTask}: { task: Task; onSelectTask: (taskId: number) => void}) => {

  return (
    <li style={{border: '1px solid #ccc'}} onClick={() => onSelectTask(task.id)}>
        <h3>{task.title}</h3>
        <p>Category: {task.category}</p>
        <p>Duration: {task.duration} minutes</p>
        <p>Deadline: {task.deadline}</p>
        <p>Status: {task.status}</p>
    </li>
  )
}

export default TaskCard