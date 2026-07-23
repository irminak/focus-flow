import type { Task } from '../types/task'
import TaskCard from './TaskCard'

const TaskGrid = ({tasks, onCompleteTask}: { tasks: Task[]; onCompleteTask: (taskId: number) => void }) => {
  return (
    <ul>
        {tasks.map((task) =>
            <TaskCard key={task.id} task={task} onCompleteTask={onCompleteTask}/>
        )}
    </ul>
  )
}

export default TaskGrid