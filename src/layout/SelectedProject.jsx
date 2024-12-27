import React, { useContext } from "react";
import { ProjectsContext } from "../store/projects-context";

const SelectedProject = () => {
  const { project, handleDeleteProject } = useContext(ProjectsContext);
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-UK");

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 border-b2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={handleDeleteProject}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
    </div>
  );
};

export default SelectedProject;
