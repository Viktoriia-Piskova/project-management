import React, { useContext, useRef, useState } from "react";
import { ProjectsContext } from "../store/projects-context";

const NewTask = () => {
  const { handleAddTask } = useContext(ProjectsContext);
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    let enteredTask = inputRef.current.value;
    if (enteredTask.trim() === "") return;
    handleAddTask(enteredTask);
    inputRef.current.value = "";
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full p-2 flex items-center gap-4 justify-between">
        <input
          type="text"
          className="w-64 p-2 rounded-sm bg-slate-200"
          ref={inputRef}
        ></input>
        <button type="submit" className="text-slate-600 hover:text-stone-900 ml-4 font-bold">
          Add task
        </button>
      </form>
    </>
  );
};

export default NewTask;
