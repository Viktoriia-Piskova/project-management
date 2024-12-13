import React, { forwardRef } from "react";

const Input = forwardRef(function Input({ type = "text", label, ...props }, ref) {
  const inputClasses = "p-2 w-full mb-2 rounded-md bg-slate-300 focus:outline-slate-900";
  
  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-slate-700 text-sm font-bold uppercase">
        {label}
      </label>
      {type !== "textarea" ? (
        <input ref={ref} type={type} className={inputClasses} {...props} />
      ) : (
        <textarea ref={ref} className={inputClasses} {...props}></textarea>
      )}
    </div>
  );
});

export default Input;
