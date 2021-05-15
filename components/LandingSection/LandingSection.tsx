import React from "react";
import { COMPANY_NAME, LANDING_SECTION_ID } from "../../common/constants";
import AppImage from "../AppImage/AppImage";
import Button from "../Button/Button";
import Section from "../Section/Section";

const LandingSection: React.FC = () => {
  const background = (
    <AppImage
      overlay
      overlayOpacity={0.5}
      className="h-full w-full"
      src="pica.jpg"
    />
  );

  return (
    <Section
      className="h-screen"
      id={LANDING_SECTION_ID}
      background={background}
    >
      <div className="h-full max-w-lg mx-auto flex items-center justify-center">
        <div>
          <h1 className="font-primary text-5xl font-semibold text-center">
            {COMPANY_NAME}
          </h1>
          <p className="mt-5 text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            molestiae consequuntur labore esse incidunt saepe molestias
          </p>
          <div className="text-center mt-10">
            <Button size="large">Meniu</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LandingSection;
