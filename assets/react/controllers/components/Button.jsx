import React from "react";

export default function Button({ title, className }) {
  return (
    <button
      className={`text-white font-semibold text-md bg-primary rounded-md px-4 py-2 ${className}  hover:bg-primary/80 transition-all`}
    >
      {title}
    </button>
  );
}
