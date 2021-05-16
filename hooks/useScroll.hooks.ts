import { useEffect, useState } from "react";

export const useScroll = (yOffset: number) => {
  const [scrolled, setScrolled] = useState(true);

  const isScrolledOver = (currentYOffset: number) => {
    return currentYOffset < yOffset;
  };

  useEffect(() => {
    window.onscroll = () => {
      setScrolled(isScrolledOver(window.pageYOffset));
    };

    setScrolled(isScrolledOver(window.pageYOffset));
    return () => {
      delete window.onscroll;
    };
  }, []);

  return scrolled;
};
