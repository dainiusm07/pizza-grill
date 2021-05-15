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
      <div className="flex flex-col mx-auto py-16 rounded-3xl p-5 items-center">
        <SectionTitle>Atsiliepimas</SectionTitle>
        <form className="max-w-xl mx-auto w-full mt-16 bg-white text-black px-7 py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200">
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
        {/* <div className="w-1/2 pl-16">
          <h1 className="font-primary font-semibold text-4xl">Atsiliepimas</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            distinctio libero quaerat sequi nulla iste natus qui rerum aliquid!
            Ipsam possimus consectetur modi minima placeat omnis dolorum aliquam
            nulla laudantium!
          </p>
        </div> */}
      </div>
    </Section>
  );
};

export default ReviewSection;
