import { useState } from "react"
import TaskForm from "./components/TaskForm";
import TaskGrid from "./components/TaskGrid";
import ProgressBar from "./components/ProgressBar";
import type { Task } from "./types/task";
import FocusView from "./components/FocusView";

const App = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  const addTask = (task: Task) => {
    setTasks((previousTasks) => [...previousTasks, task]);
  }

  const countProgress = (tasks: Task[]) => {
    const allTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === 'completed').length;
    const progressPercentage = allTasks > 0 ? (completedTasks / allTasks) * 100 : 0;
    return progressPercentage;
  }

  const selectTask = (taskId: number) => {
    setSelectedTaskId(taskId);
  }

  const currentTask = tasks.find((t) => t.id === selectedTaskId);

  const handleGoBack = () => {
    setSelectedTaskId(null);
  }

  return (
    <div>
      {selectedTaskId !== null ? <FocusView handleGoBack={handleGoBack} currentTask={currentTask}/> :
        <div>
          <ProgressBar progress={countProgress(tasks)} />
          <TaskForm onAddTask={addTask} />
          <TaskGrid tasks={tasks} onSelectTask={selectTask} /> 
        </div>
      }
      
    </div>
  )
}

export default App