import React from "react";
import { DAILY_LUNCH_MENU_SECTION_ID } from "../../common/constants";
import { useMediaDown } from "../../hooks/useMediaDown.hook";
import useVisibility from "../../hooks/useVisibility.hook";
import AppImage from "../AppImage/AppImage";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { CarouselImageType } from "../ImageCarousel/ImageCarousel.types";
import Section from "../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";

const images: CarouselImageType[] = [
  {
    src: "landing_1.jpg",
  },
  {
    src: "landing_2.jpg",
  },
  {
    src: "landing_3.jpg",
  },
];

const DailyLunchMenuSection: React.FC = () => {
  const isSmDown = useMediaDown("sm");
  const [isImagesContainerVisible, ref] = useVisibility<HTMLDivElement>(30);

  const background = <div className="h-full w-full bg-gray-100" />;

  return (
    <Section id={DAILY_LUNCH_MENU_SECTION_ID} background={background}>
      <div className="py-20">
        <div
          data-aos="zoom-in-up"
          className="max-w-md mx-auto text-center text-black"
        >
          <SectionTitle>Dienos pietus</SectionTitle>
          <p className="mt-6 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            earum laborum nesciunt possimus ab, vel veritatis rerum quia ut
            ipsam, et inventore quasi sit quis iste vitae nihil voluptatem
            quidem?
          </p>
        </div>
        <div ref={ref} className="mt-16 h-52">
          {isSmDown ? (
            <div
              data-aos="flip-left"
              data-aos-delay="150"
              className="h-full rounded-lg overflow-hidden"
            >
              <ImageCarousel
                play={isImagesContainerVisible}
                showIndicators
                images={images}
              />
            </div>
          ) : (
            <div className="flex h-full">
              {images.map(({ src, overlayOpacity }, indx) => (
                <AppImage
                  key={src}
                  src={src}
                  isVisible={isImagesContainerVisible}
                  className="w-1/3 mx-2"
                  rounded
                  overlayOpacity={overlayOpacity}
                  data-aos="fade-up"
                  data-aos-delay={50 + indx * 100}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default DailyLunchMenuSection;
