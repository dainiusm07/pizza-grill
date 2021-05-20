import { createRef, useEffect } from "react";
import { CAROUSEL_DURATION, CAROUSEL_INTERVAL } from "../../common/constants";
import AppImage from "../AppImage/AppImage";
import { ImageCarouselProps } from "./ImageCarousel.types";
import Slider from "react-slick";

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  play,
  images,
  showIndicators,
}) => {
  const ref = createRef<any>();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (play) {
      ref.current.slickPlay();
    } else {
      ref.current.slickPause();
    }
  }, [play]);

  const appendDots = (dots: JSX.Element[]) => <ul>{dots}</ul>;

  const carouselItems = images.map(({ src, overlayOpacity }, indx) => (
    <AppImage
      key={src}
      src={src}
      lazyLoad={false}
      className="h-full w-full"
      overlayOpacity={overlayOpacity}
    />
  ));

  return (
    <Slider
      className="h-full"
      ref={ref}
      arrows={false}
      autoplay={true}
      lazyLoad="progressive"
      dots={showIndicators}
      appendDots={appendDots}
      infinite
      autoplaySpeed={CAROUSEL_INTERVAL}
      speed={CAROUSEL_DURATION}
    >
      {carouselItems}
    </Slider>
  );
};

export default ImageCarousel;
