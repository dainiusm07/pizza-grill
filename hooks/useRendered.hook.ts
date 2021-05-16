import { useEffect, useState } from "react";

export const useRendered = () => {
  const [rendered, setRendered] = useState(false);

  let timeout;

  useEffect(() => {
    timeout = setTimeout(() => {
      setRendered(true);
    }, 0);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return rendered;
};
