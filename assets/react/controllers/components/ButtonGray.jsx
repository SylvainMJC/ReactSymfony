import React from "react";

export default function ButtonGray({ title, className }) {
  return (
    <button
      className={`border font-medium text-md rounded-md px-4 py-2 ${className} hover:bg-customGrey/10 transition-all`}
    >
      {title}
    </button>
  );
}
