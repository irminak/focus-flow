import type { Task } from "../types/task"

const TaskCard = ({task, onSelectTask}: { task: Task; onSelectTask: (taskId: number) => void}) => {

  return (
    <li className="task-card" onClick={() => onSelectTask(task.id)}>
        <h3 className="task-card__title">{task.title}</h3>
        <p className="task-card__category">{task.category}</p>
        {task.remainingTime != 0 ? <p className="task-card__time">{task.remainingTime} seconds</p> :  <p className="task-card__time">{task.duration} minutes</p>}
    </li>
  )
}

export default TaskCard