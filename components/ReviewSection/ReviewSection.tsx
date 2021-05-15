import React from "react";
import { REVIEW_SECTION_ID } from "../../common/constants";
import AppImage from "../AppImage/AppImage";
import Button from "../Button/Button";
import Section from "../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";
import TextField from "../TextField/TextField";

const ReviewSection: React.FC = () => {
  const background = (
    <AppImage overlay className="h-full w-full" src="landing_1.jpg" />
  );
  return (
    <Section id={REVIEW_SECTION_ID} background={background}>
      <div className="py-16 p-5">
        <div
          data-aos="flip-left"
          data-aos-delay="150"
          className="w-full max-w-lg mx-auto bg-white text-black py-7 rounded-lg shadow-xl"
        >
          <div className="text-center">
            <SectionTitle>Atsiliepimas</SectionTitle>
            <p className="mt-2">Mums svarbi jusu nuomone</p>
          </div>
          <form className="max-w-xl mx-auto w-full mt-16 px-10">
            <TextField
              label="El. pastas"
              placeholder="Jusu el. pastas"
              type="email"
            />
            <TextField
              label="Vardas"
              className="mt-3"
              placeholder="Jusu vardas"
              type="text"
            />
            <TextField
              label="Atsiliepimas"
              className="mt-3"
              multiline
              placeholder="Jusu atsiliepimas"
              type="text"
            />
            <div className="mt-4 text-right">
              <Button>Siusti</Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ReviewSection;
