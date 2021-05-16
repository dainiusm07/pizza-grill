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

export const useMedia = (size: Breakpoint["size"]) => {
  const [matches, setMatches] = useState(false);

  const neededBreakpoint = breakpoints.find(
    (breakpoint) => breakpoint.size === size
  );

  const listener = () => {
    setMatches(neededBreakpoint.width >= window.innerWidth);
  };

  useEffect(() => {
    listener();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [matches]);

  return matches;
};
