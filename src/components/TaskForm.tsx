import React, { useState } from 'react'
import type { Task } from '../types/task'
import { categories } from '../data/categories';
import type { FormErrors } from '../types/errors';

const TaskForm = ({ onAddTask }: { onAddTask: (task: Task) => void }) => {
const [title, setTitle] = useState('');
const [category, setCategory] = useState('');
const [duration, setDuration] = useState('');

const [errors, setErrors] = useState<FormErrors>({});

const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors: FormErrors = {};
    if (!title.trim()){
        validationErrors.title = "Title is required";
    } if (!category.trim()){
        validationErrors.category = "Category is required";
    } if (!duration.trim() || isNaN(Number(duration)) || Number(duration) <= 0){
        validationErrors.duration = "Duration must be a positive number";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
        return;
    } 
    setErrors({});

    const newTask: Task = {
        id: Date.now(),
        title,
        category,
        duration: Number(duration),
        deadline: "",
        status: 'todo'
    };
   
    onAddTask(newTask);
    setTitle('');
    setCategory('');
    setDuration('');
};
  return (
    <div>
        <form onSubmit={handleAddTask}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
            </div>
            
             <div>
                <label htmlFor="category">Category</label>
                <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
                {errors.category && <p style={{ color: 'red' }}>{errors.category}</p>}
            </div>
            <div>
                <label htmlFor="duration">Duration</label>
                <input type="number" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)}/>
                {errors.duration && <p style={{ color: 'red' }}>{errors.duration}</p>}
            </div>
            <button type="submit" >Add Task</button>
        </form> 
    </div>
  )
}

export default TaskForm