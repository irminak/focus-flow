import type { Task } from '../types/task'
import TaskCard from './TaskCard'

const TaskGrid = ({tasks, onSelectTask}: { tasks: Task[];  onSelectTask: (taskId: number) => void }) => {
  return (
    <ul>
        {tasks.map((task) =>
            <TaskCard key={task.id} task={task} onSelectTask={onSelectTask}/>
        )}
    </ul>
  )
}

export default TaskGrid