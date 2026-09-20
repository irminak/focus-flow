export type Task = {
    id: number; 
    title: string; 
    description?: string;
    category: string; 
    duration: number; 
    remainingTime: number;
    deadline: string; 
    status: 'todo' | 'in-progress' | 'completed';
}