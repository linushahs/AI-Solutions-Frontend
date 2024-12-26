import React from "react";
import { twMerge } from "tailwind-merge";

function Container({ children, className, ...props }) {
  return (
    <div
      className={twMerge(
        "mx-auto w-[95%] sm:w-[90%] xl:max-w-[1400px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
