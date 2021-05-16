import { useEffect, useState } from "react";

type Breakpoint = {
  size: "sm" | "md" | "lg" | "xl" | "2xl";
  width: number;
};

const breakpoints: Breakpoint[] = [
  {
    size: "sm",
    width: 640,
  },
  {
    size: "md",
    width: 768,
  },
  {
    size: "lg",
    width: 1024,
  },
  {
    size: "xl",
    width: 1280,
  },
  {
    size: "2xl",
    width: 1536,
  },
];

export const useMediaDown = (size: Breakpoint["size"]) => {
  const [width, setWidth] = useState(0);

  const breakpointWidth = breakpoints.find(
    (breakpoint) => breakpoint.size === size
  ).width;

  const handleResizeEvent = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResizeEvent);
      handleResizeEvent();
      return () => {
        window.removeEventListener("resize", handleResizeEvent);
      };
    }
  }, []);

  return breakpointWidth >= width && width !== 0;
};
