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

  const startTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.map((task) => task.id === taskId ? { ...task, status: 'in-progress' } : task));
  }

  const resumeTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.map((task) => task.id === taskId ? { ...task, status: 'todo' } : task));
    setTasks((prevTasks) => prevTasks.map((task) => task.id === taskId ? { ...task, remainingTime: 0 } : task));
  }

  const completeTask = (taskId: number) => {
    setTasks((prevTask) => prevTask.map((task) => task.id === taskId ? { ...task, status: 'completed' } : task));
    setTasks((prevTasks) => prevTasks.map((task) => task.id === taskId ? { ...task, remainingTime: 0 } : task));
    setSelectedTaskId(null);

  }


  const continueTaskLater = (taskId: number, remainingTime: number) => {
    setTasks((prevTasks) => prevTasks.map((task) => task.id === taskId ? { ...task, remainingTime: remainingTime } : task));
    setSelectedTaskId(null);
  }

  // const handleGoBack = () => {
  //   setSelectedTaskId(null);
  // }

  return (
    <div>
      {currentTask ? <FocusView task={currentTask} onComplete={completeTask} onStart={startTask} onResume={resumeTask} onContinueLater={continueTaskLater} /> :
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