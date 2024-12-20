import React, { useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../layout/Modal";

const NewProject = ({ onSave }) => {
  const modalRef = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription === "" ||
      enteredDueDate === ""
    ) {
      modalRef.current.open();
      return;
    }

    const project = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
      id: Math.random(),
    };

    onSave(project);
  }
  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-xl text-bold text-center my-4">Validation error</h2>
        <p className="">Please make sure you provide a valid value for every input</p>
      </Modal>
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
    </>
  );
};

export default NewProject;
