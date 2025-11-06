import { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import type { Task, TaskStatus } from "./types";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Design landing page",
      description:
        "Create the initial wireframe and mockups for the landing page.",
      status: "pending",
      priority: "high",
      dueDate: "2025-06-20",
    },
    {
      id: "2",
      title: "Set up CI/CD pipeline",
      description:
        "Configure GitHub Actions for automated testing and deployment.",
      status: "pending",
      priority: "medium",
      dueDate: "2025-06-18",
    },
    {
      id: "3",
      title: "Fix login bug",
      description:
        "Resolve the issue where users can't log in with Google OAuth.",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-06-14",
    },
    {
      id: "4",
      title: "Write unit tests",
      description: "Add coverage for the user service module.",
      status: "in-progress",
      priority: "low",
      dueDate: "2025-06-22",
    },
    {
      id: "5",
      title: "Deploy to staging",
      description: "Push the latest build to the staging environment for QA.",
      status: "completed",
      priority: "medium",
      dueDate: "2025-06-10",
    },
  ]);

  const [filters, setFilters] = useState<{ status?: TaskStatus; priority?: string }>({});

  const filteredTasks = tasks.filter(task => {
    const statusMatch = !filters.status || task.status === filters.status;
    const priorityMatch = !filters.priority || task.priority === filters.priority;
    return statusMatch && priorityMatch;
  });

  const onDelete = (taskId: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id != taskId));
  };

  const onStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === taskId ? {...task, status: newStatus} : task))
  };

  return (
    <div>
      <h1>Tasks Manager App</h1>
    <TaskFilter onFilterChange={setFilters} />
      <TaskList
        tasks={filteredTasks}
        onDelete={onDelete}
        onStatusChange={onStatusChange}
      />
    </div>
  );
}

export default App;