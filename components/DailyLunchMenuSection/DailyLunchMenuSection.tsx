import React from "react";
import { DAILY_LUNCH_MENU_SECTION_ID } from "../../common/constants";
import AppImage from "../AppImage/AppImage";
import Section from "../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";
import { dailyLunchMenuImages } from "./DailyLunchMenuSection.data";

const DailyLunchMenuSection: React.FC = () => {
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
        <div className="flex mt-16">
          {dailyLunchMenuImages.map((src, indx) => (
            <AppImage
              key={src}
              rounded
              className="w-1/3 m-2 h-52"
              src={src}
              data-aos="fade-up"
              data-aos-delay={50 + indx * 100}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default DailyLunchMenuSection;
