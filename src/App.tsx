import { useState } from "react"

const App = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  
  return (
    <div>App</div>
  )
}

export default App