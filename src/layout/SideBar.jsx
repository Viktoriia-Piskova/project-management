import React from "react";
import Button from "../components/Button";

const SideBar = ({ onStartAddProject, projects }) => {
  return (
    <aside className="w-9/10 bg-slate-900 text-slate-100 p-8 mr-4 md:w-72 rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl">Your projects</h1>
      <Button isDark onClick={onStartAddProject}>
        + Add project
      </Button>
      <ul className="text-slate-100 mt-4">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left rounded-sm py-2 px-3 text-slate-400 hover:text-slate-100 hover:bg-slate-950">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
