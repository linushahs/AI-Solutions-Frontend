import React from "react";
import { twMerge } from "tailwind-merge";

function Input({ type, className, ...props }) {
  return (
    <input
      className={twMerge(
        "outline-none rounded p-2 bg-gray-200 border-b-2 border-gray-400",
        className
      )}
      type={type || "text"}
      {...props}
    />
  );
}
export default Input;
