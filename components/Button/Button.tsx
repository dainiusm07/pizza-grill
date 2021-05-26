import React from "react";
import clsx from "clsx";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: "medium" | "large";
};

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  className,
  children,
  ...props
}) => {
  const sizeClass = size === "large" ? "text-2xl px-7 py-2" : "py-1.5 px-4";

  return (
    <button
      className={clsx(
        "font-semibold focus:outline-none border transition duration-300 rounded uppercase",
        sizeClass,
        "bg-black text-white border-white hover:bg-white hover:text-black hover:border-black",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
