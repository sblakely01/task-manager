import React from "react";
import type { TaskFilterProps } from "../../types";

export function TaskFilter({ onFilterChange }: TaskFilterProps) {
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onFilterChange({ status: e.target.value as any});
    };

    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onFilterChange({ priority: e.targget.value as any });
    };

    return (
        <div>
            <h3>Filter Tasks</h3>
            <label>
                Status:
                <select onChange={handleStatusChange}>
                    <option value="">All</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In-Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </label>

            <label>
                Priority:
                <select onChange={handlePriorityChange}>
                    <option value="">All</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>
        </div>
    );
}

