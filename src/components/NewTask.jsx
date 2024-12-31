import React, { useContext, useState } from "react";
import { ProjectsContext } from "../store/projects-context";

const NewTask = () => {
  const [enteredTask, setEnteredTask] = useState("");
  const { handleAddTask } = useContext(ProjectsContext);
  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={enteredTask}
        onChange={handleChange}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      ></input>
      <button
        className="text-slate-700 hover:text-stone-900"
        onClick={handleAddTask}
      >
        Add task
      </button>
    </div>
  );
};

export default NewTask;
