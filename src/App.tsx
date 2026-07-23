import { useState } from "react"
import TaskForm from "./components/TaskForm";
import TaskGrid from "./components/TaskGrid";
import ProgressBar from "./components/ProgressBar";
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

  const countProgress = (tasks: Task[]) => {
    const allTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const progressPercentage = allTasks > 0 ? (completedTasks / allTasks) * 100 : 0;
    return progressPercentage;
  }

  return (
    <div>
      <ProgressBar progress={countProgress(tasks)} />
      <TaskForm onAddTask={addTask} />
      <TaskGrid tasks={tasks} onCompleteTask={completeTask} />
    </div>
  )
}

export default App