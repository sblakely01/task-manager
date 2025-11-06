import { TaskItem } from "../TaskItem/TaskItem";
import type { Task } from "../../types";

export type TaskStatus = 'pending' | 'in-progress' | 'completed';


export interface TaskListProps {
    tasks: Task[];
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}

function TaskList({tasks, onStatusChange, onDelete}: TaskListProps) {

    return (
        <div>
            <h2>Task List</h2>
            {tasks.map(task => (
                <div key={task.id}>
                    <TaskItem  task={task} onStatusChange={onStatusChange} onDelete={onDelete} />
                </div>
            ))}
        </div>
    )
}

export default TaskList;