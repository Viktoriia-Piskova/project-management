import React from "react";
import Button from "../components/Button";

const SideBar = ({onStartAddProject}) => {
  return (
    <aside className="w-9/10 bg-slate-900 text-slate-100 p-8 mr-4 md:w-72 rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl">Your projects</h1>
      <Button isDark onClick={onStartAddProject}> + Add project</Button>
      <ul className="text-slate-100">
        ...
      </ul>
    </aside>
  );
};

export default SideBar;
