import React from "react";
import { ABOUT_US_SECTION_ID } from "../../common/constants";
import AppImage from "../AppImage/AppImage";
import Section from "../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";

const AboutUsSection: React.FC = () => {
  return (
    <Section id={ABOUT_US_SECTION_ID}>
      <div className="flex flex-col sm:flex-row py-20 text-black items-center">
        <div
          data-aos="fade-right"
          className="w-full sm:w-1/2 sm:pr-10 text-center sm:text-left"
        >
          <SectionTitle>Apie mus</SectionTitle>
          <p className="mt-6 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            dolore dignissimos vero eligendi, officiis pariatur nam omnis earum
            ipsam nihil exercitationem vitae assumenda, ex doloribus at
            excepturi fugiat minima iure?
          </p>
        </div>
        <AppImage
          data-aos="fade-left"
          rounded
          className="w-full mt-10 sm:mt-0 sm:w-1/2 h-60 sm:h-96"
          src="landing_2.jpg"
        />
      </div>
    </Section>
  );
};

export default AboutUsSection;
