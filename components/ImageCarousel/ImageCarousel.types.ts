export type CarouselImageType = {
  src: string;
  overlayOpacity?: number;
};

export type ImageCarouselProps = {
  images: CarouselImageType[];
  play?: boolean;
  children?: undefined;
  showIndicators?: boolean;
};
