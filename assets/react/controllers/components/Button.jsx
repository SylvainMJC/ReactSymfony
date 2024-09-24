import React from "react";

export default function Button({ title }) {
  return (
    <div className="text-white text-md bg-primary rounded-md px-4 py-2">
      {title}
    </div>
  );
}
