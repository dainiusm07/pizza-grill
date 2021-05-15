import React from "react";
import { ABOUT_US_SECTION_ID } from "../../common/constants";
import AppImage from "../AppImage/AppImage";
import Section from "../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";

const AboutUsSection: React.FC = () => {
  return (
    <Section id={ABOUT_US_SECTION_ID}>
      <div className="flex py-20 text-black items-center">
        <div data-aos="fade-right" className="w-1/2 pr-10">
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
          className="w-1/2 h-96"
          src="landing_2.jpg"
        />
      </div>
    </Section>
  );
};

export default AboutUsSection;
