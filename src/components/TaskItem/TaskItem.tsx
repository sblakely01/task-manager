import React, { useState } from "react";
import type { Task, TaskItemProps, TaskStatus } from "../../types";



export function TaskItem({task, onStatusChange, onDelete}: TaskItemProps) {

    const [selectedValue, setSelectedValue] = useState<string>(task.status);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
        
        onStatusChange(task.id, event.target.value);
    }


    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Due: {task.dueDate}</p>
            <select id="statusSelect" value={selectedValue} onChange={handleSelectChange}>
                <option value="pending">Pending</option>
                <option value="in-progress">In-Progress</option>
                <option value="completed">Completed</option>
            </select>
            <button onClick={() =>  onDelete(task.id)}>Delete</button>
        </div>
    )
}