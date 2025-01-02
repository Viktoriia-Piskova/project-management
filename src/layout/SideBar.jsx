import React, {useContext} from "react";
import Button from "../components/Button";
import { ProjectsContext } from "../store/projects-context";

const SideBar = () => {
  const {projects, selectedProjectId, handleSelectProject, handleStartAddProject} = useContext(ProjectsContext);

  return (
    <aside className="w-9/10 bg-slate-900 text-slate-100 p-8 mr-4 md:w-72 rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl">Your projects</h1>
      <Button isDark onClick={handleStartAddProject}>
        + Add project
      </Button>
      <ul className="text-slate-100 mt-4">
        {projects.map(
          (project) =>
            project.id && (
              <li key={project.id}>
                <button
                  onClick={() => handleSelectProject(project.id)}
                  className={`w-full text-left rounded-sm py-2 px-3 text-slate-400 ${
                    selectedProjectId=== project.id ? "bg-slate-950" : "bg-slate-700"
                  } hover:text-slate-100 hover:bg-slate-950`}
                >
                  {project.title}
                </button>
              </li>
            )
        )}
      </ul>
    </aside>
  );
};

export default SideBar;
