import React from "react";

export default function Button({ title, className }) {
  return (
    <div
      className={`text-white text-md bg-primary rounded-md px-4 py-2 ${className} max-w-max`}
    >
      {title}
    </div>
  );
}
