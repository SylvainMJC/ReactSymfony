import React from "react";

export default function Input({
  type,
  id,
  name,
  required,
  maxLength,
  placeholder,
  className = "",
  ...props
}) {
  return (
    <input
      className={`mt-1 p-2 w-full border border-customGrey/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
      type={type}
      id={id}
      name={name}
      required={required}
      maxLength={maxLength}
      placeholder={placeholder}
      {...props}
    />
  );
}
