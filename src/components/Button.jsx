import React from "react";

const Button = ({ isDark, onClick, children, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`px-4 py-2 text-base rounded-md hover:bg-slate-500 disabled:opacity-50 disabled:cursor-not-allowed ${
        isDark ? "bg-slate-600 text-slate-100" : "text-slate-800"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
