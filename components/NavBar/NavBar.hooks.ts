import { useEffect, useState } from "react";

const shouldNavBarExpand = (yOffset: number) => {
  return yOffset < 300;
};

export const useNavBarExpansion = () => {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      setExpanded(shouldNavBarExpand(window.pageYOffset));
    };

    setExpanded(shouldNavBarExpand(window.pageYOffset));
    return () => {
      delete window.onscroll;
    };
  }, []);

  return expanded;
};
