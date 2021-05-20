import { useEffect, useState } from "react";
import throttle from "lodash.throttle";

export const useScroll = (
  yOffset: number,
  throttleMilliseconds = 100
): boolean | null => {
  const [scrolledOver, setScrolledOver] = useState<boolean>(null);

  const onScroll = throttle(() => {
    setScrolledOver(window.pageYOffset < yOffset);
  }, throttleMilliseconds);

  useEffect(() => {
    if (typeof window !== "undefined") {
      onScroll();
      window.addEventListener("scroll", onScroll, true);
      return () => window.removeEventListener("scroll", onScroll, true);
    }
  }, []);

  return scrolledOver;
};
