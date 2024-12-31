import React, { useContext } from "react";
import { ProjectsContext } from "../store/projects-context";

const Tasks = () => {
  const { selectedProjectTasks } = useContext(ProjectsContext);
  return (
    <ul className="p-2">
      {Array.isArray(selectedProjectTasks) ? 
      (selectedProjectTasks.map((task) => {
        return (
          <li className="my-2 text-slate-900 text-lg" key={task.id}>
            {task.text}
          </li>
        );
      })): <p>No tasks</p>}
    </ul>
  );
};

export default Tasks;
