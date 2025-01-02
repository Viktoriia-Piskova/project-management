import React, { useContext } from "react";
import { ProjectsContext } from "../store/projects-context";

const Tasks = () => {
  const { selectedProjectTasks, handleDeleteTask } =
    useContext(ProjectsContext);
  return (
    <ul className="p-2">
      {Array.isArray(selectedProjectTasks) ? (
        selectedProjectTasks.map((task) => {
          return (
            <li
              className="my-2 text-slate-900 text-lg flex justify-between hover:bg-slate-200 mb-4 p-2 rounded-md"
              key={task.id}
            >
              <p>{task.text}</p>
              <button
                className="ml-4 text-slate-400 font-semibold hover:text-slate-600"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          );
        })
      ) : (
        <p>No tasks</p>
      )}
    </ul>
  );
};

export default Tasks;
