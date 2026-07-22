import type { Task } from "../types/task"

const TaskCard = ({task}: { task: Task }) => {
  return (
    <li>
        <h3>{task.title}</h3>
        <p>Category: {task.category}</p>
        <p>Duration: {task.duration} minutes</p>
        <p>Deadline: {task.deadline}</p>
        <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
    </li>
  )
}

export default TaskCard