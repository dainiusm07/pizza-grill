import { useEffect, useRef, useState } from "react";
import throttle from "lodash.throttle";

export default function useVisibility<Element extends HTMLElement>(
  offset = 0,
  throttleMilliseconds = 100
): [boolean, React.RefObject<Element>] {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = useRef<Element>();

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }

    const { top, bottom } = currentElement.current.getBoundingClientRect();

    setIsVisible(
      (top + offset >= 0 && top - offset <= window.innerHeight) ||
        (bottom + offset >= 0 && bottom - offset <= window.innerHeight)
    );
  }, throttleMilliseconds);

  useEffect(() => {
    onScroll();
    document.addEventListener("scroll", onScroll, false);
    return () => document.removeEventListener("scroll", onScroll, false);
  }, []);

  return [isVisible, currentElement];
}
