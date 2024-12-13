import React from "react";
import Button from "../components/Button";
import noProjectImage from "../assets/no-projects.png";

const NoProjectSelected = ({onStartAddProject}) => {
  return (
    <div className="mt-24 text-center w-full md:w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProjectImage}
        alt="An empty tas list"
      />
      <h2 className="text-xl font-bold text-slate-700 my-4">
        No project selected
      </h2>
      <p className="text-slate-700 mb-4">
        Select a project or create a new one
      </p>
      <div>
        <Button isDark onClick={onStartAddProject} >Create new project</Button>
      </div>
    </div>
  );
};

export default NoProjectSelected;
