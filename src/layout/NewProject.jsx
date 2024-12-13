import React, { useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const NewProject = ({ onSave }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const project = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
    };

    onSave(project);
  }
  return (
    <div className="px-4 w-full md:w-[80%] max-w-[500px]">
      <menu className="flex items-center justify-end gap-4 my-4">
        <Button disabled>Cancel</Button>
        <Button onClick={handleSave} isDark>
          Save
        </Button>
      </menu>
      <div>
        <Input ref={titleRef} label="Title" />
        <Input ref={descriptionRef} type="textarea" label="Description" />
        <Input ref={dueDateRef} type="date" label="Due date" />
      </div>
    </div>
  );
};

export default NewProject;
