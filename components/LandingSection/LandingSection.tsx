import Link from "next/link";
import React from "react";
import { COMPANY_NAME, LANDING_SECTION_ID } from "../../common/constants";
import useVisibility from "../../hooks/useVisibility.hook";
import Button from "../Button/Button";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { CarouselImageType } from "../ImageCarousel/ImageCarousel.types";
import Section from "../Section/Section";

const carouselImages: CarouselImageType[] = [
  {
    src: "landing_1.jpg",
    overlayOpacity: 0.5,
  },
  {
    src: "landing_2.jpg",
    overlayOpacity: 0.5,
  },
  {
    src: "landing_3.jpg",
    overlayOpacity: 0.5,
  },
  {
    src: "landing_4.jpg",
    overlayOpacity: 0.5,
  },
  {
    src: "landing_5.jpg",
    overlayOpacity: 0.5,
  },
  {
    src: "landing_6.jpg",
    overlayOpacity: 0.5,
  },
];

const LandingSection: React.FC = () => {
  const [isSectionVisible, ref] = useVisibility();

  const background = (
    <ImageCarousel
      play={isSectionVisible}
      showIndicators={false}
      images={carouselImages}
    />
  );

  return (
    <Section
      className="h-screen w-screen"
      id={LANDING_SECTION_ID}
      ref={ref}
      background={background}
    >
      <div className="h-full flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <h1 className="font-primary text-5xl sm:text-7xl font-semibold">
            {COMPANY_NAME}
          </h1>
          <h3 className="font-primary uppercase font-semibold text-2xl sm:text-3xl">
            Trakai
          </h3>
          <p className="mt-5 text-xl sm:text-2xl">
            Mūsų misija – pradžiuginti savo klientus gaminant maistą su meile
          </p>
          <div className="text-center mt-10">
            <Link href="/menu">
              <a>
                <Button size="large">Meniu</Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LandingSection;
