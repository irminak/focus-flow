import React from 'react'
import type { Task } from '../types/task'

const TaskGrid = ({tasks}: { tasks: Task[] }) => {
  return (
    <ul>
        {tasks.map((task) =>
            <li key={task.id}>
                <h3>{task.title}</h3>
                <p>Category: {task.category}</p>
                <p>Duration: {task.duration} minutes</p>
                <p>Deadline: {task.deadline}</p>
                <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
            </li>
        )}
    </ul>
  )
}

export default TaskGrid