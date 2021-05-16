import ReCarousel from "re-carousel";
import { CAROUSEL_DURATION, CAROUSEL_INTERVAL } from "../../common/constants";
import CarouselIndicatorDots from "../CarouselIndicators/CarouselIndicators";

type CarouselProps = {
  frames?: JSX.Element[];
};

const Carousel: React.FC<CarouselProps> = ({ children, frames }) => {
  return (
    <ReCarousel
      auto
      loop
      interval={CAROUSEL_INTERVAL}
      duration={CAROUSEL_DURATION}
      widgets={[CarouselIndicatorDots]}
      frames={frames}
    >
      {children}
    </ReCarousel>
  );
};

export default Carousel;
