import { useState } from "react"
import TaskForm from "./components/TaskForm";
import TaskGrid from "./components/TaskGrid";
import type { Task } from "./types/task";

const App = () => {

  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((previousTasks) => [...previousTasks, task]);
  }

  const completeTask = (taskId: number) => {
    setTasks((previousTask) => previousTask.map((task) =>
      task.id === taskId  ? { ...task, completed: !task.completed } : task
    )); 
  };

  return (
    <div>
      <TaskForm onAddTask={addTask} />
      <TaskGrid tasks={tasks} onCompleteTask={completeTask} />
    </div>
  )
}

export default App