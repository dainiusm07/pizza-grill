import clsx from "clsx";
import React from "react";

import { CarouselWidgetProps } from "../Carousel/Carousel.types";

const CarouselIndicatorDots: React.FC<CarouselWidgetProps> = ({
  total,
  index,
}) => {
  return (
    <div className="absolute inset-x-0 bottom-0 z-100 text-center">
      {total > 2 &&
        Array.apply(null, Array(total)).map((_, i) => (
          <span
            key={i}
            className={clsx(
              "inline-block h-2 w-2 rounded-full bg-white my-2 mx-1",
              index === i ? "opacity-100" : "opacity-30"
            )}
          />
        ))}
    </div>
  );
};

export default CarouselIndicatorDots;
