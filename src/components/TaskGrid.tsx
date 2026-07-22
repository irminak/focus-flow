import type { Task } from '../types/task'
import TaskCard from './TaskCard'

const TaskGrid = ({tasks}: { tasks: Task[] }) => {
  return (
    <ul>
        {tasks.map((task) =>
            <TaskCard key={task.id} task={task}/>
        )}
    </ul>
  )
}

export default TaskGrid