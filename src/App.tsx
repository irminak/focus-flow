import { useState } from "react"
import TaskForm from "./components/TaskForm";
import TaskGrid from "./components/TaskGrid";
import type { Task } from "./types/task";

const App = () => {

  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((previousTasks) => [...previousTasks, task]);
    console.log(tasks);
  }

  return (
    <div>
      <TaskForm onAddTask={addTask} />
      <TaskGrid tasks={tasks}/>
    </div>
  )
}

export default App