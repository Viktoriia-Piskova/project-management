import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal(
  { children, buttonCaption = "Close" },
  ref
) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-stone-600/50 rounded-md p-6 shadow-md"
    >
      {children}
      <form method="dialog">
        <button className="mt-4 p-3 rounded-md bg-slate-900 hover:bg-slate-700 text-slate-100">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
