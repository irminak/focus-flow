import React, { useState } from 'react'
import type { Task } from '../types/task'

const TaskForm = ({ onAddTask }: { onAddTask: (task: Task) => void }) => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [category, setCategory] = useState('');
const [duration, setDuration] = useState('');

const handleSubmit = () => {
    const newTask: Task = {
        id: Date.now(),
        title,
        category,
        duration: Number(duration),
        deadline: "",
        completed: false
    };
    onAddTask(newTask);
};
  return (
    <div>
        <form action="">
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
             <div>
                <label htmlFor="category">Category</label>
                <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="duration">Duration</label>
                <input type="number" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)}/>
            </div>
            <button type="button" onClick={handleSubmit}>Add Task</button>
        </form>
    </div>
  )
}

export default TaskForm