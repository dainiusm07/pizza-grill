import React from "react";
import { ABOUT_US_SECTION_ID } from "../../common/constants";
import useVisibility from "../../hooks/useVisibility.hook";
import Anchor from "../Anchor/Anchor";
import AppImage from "../AppImage/AppImage";
import Section from "../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";

const AboutUsSection: React.FC = () => {
  const [isImageVisible, ref] = useVisibility<HTMLDivElement>(30);

  return (
    <Section>
      <Anchor id={ABOUT_US_SECTION_ID} />
      <div className="flex flex-col sm:flex-row py-20 text-black items-center">
        <div
          data-aos="fade-right"
          className="w-full sm:w-1/2 sm:pr-20 text-center sm:text-left"
        >
          <SectionTitle>Apie mus</SectionTitle>
          <p className="mt-6 text-lg text-justify">
            Pizza & Grill – tai picų ir ant žarijų kepamų patiekalų laisvalaikio
            restoranėlis, įsikūręs turistų pamėgtame mieste - Trakuose. Mūsų
            komanda kiekvieną diena yra nusiteikę rankomis su meile pagaminti
            mėsainius, picas, kurių tešlą maišome pagal tam tikrą receptūrą,
            griliaus patiekalus, salotas ar gaiviuosius kokteilius. Kiekvieną
            dieną laukiame Jūsų tiek terasoje tiek vidinėje salėje, kur galėsite
            mėgautis gardžiaisias patiekalais bei gera atmosfera.
          </p>
        </div>
        <AppImage
          isVisible={isImageVisible}
          ref={ref}
          data-aos="fade-left"
          rounded
          className="w-full mt-10 sm:mt-0 sm:w-1/2 h-60 sm:h-96"
          src="about-us.jpg"
        />
      </div>
    </Section>
  );
};

export default AboutUsSection;
