import clsx from "clsx";

type MenuButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  mode: "open" | "close";
};

const MenuButton: React.FC<MenuButtonProps> = ({
  className,
  mode,
  ...props
}) => {
  return (
    <button
      className={clsx("w-10 h-10 relative focus:outline-none", className)}
      {...props}
    >
      <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className={clsx(
            "block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out",
            mode === "open" ? "-translate-y-1.5" : "rotate-45"
          )}
        />
        <span
          aria-hidden="true"
          className={clsx(
            "block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out",
            mode === "close" && "opacity-0"
          )}
        />
        <span
          aria-hidden="true"
          className={clsx(
            "block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out",
            mode === "open" ? "translate-y-1.5" : "-rotate-45"
          )}
        />
      </div>
    </button>
  );
};

export default MenuButton;
