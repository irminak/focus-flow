export type Task = {
    id: number; 
    title: string; 
    description?: string;
    category: string; 
    duration: number; 
    deadline: string; 
    status: 'todo' | 'in-progress' | 'completed';
}