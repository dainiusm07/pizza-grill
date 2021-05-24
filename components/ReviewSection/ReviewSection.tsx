import React, { useState } from "react";
import {
  GOOGLE_SHEETS_EMAIL_SCRIPT_LINK,
  REVIEW_SECTION_ID,
} from "../../common/constants";
import { useMediaDown } from "../../hooks/useMediaDown.hook";
import useVisibility from "../../hooks/useVisibility.hook";
import Anchor from "../Anchor/Anchor";
import AppImage from "../AppImage/AppImage";
import Button from "../Button/Button";
import Section from "../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";
import TextField from "../TextField/TextField";

const ReviewSection: React.FC = () => {
  const isSmDown = useMediaDown("sm");
  const [isSectionVisible, ref] = useVisibility(30);

  const [email, setEmail] = useState("test@gmail.com");
  const [name, setName] = useState("testbane");
  const [review, setReview] = useState("test-review");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("email", email);
    formData.append("name", name);
    formData.append("review", review);

    await fetch(GOOGLE_SHEETS_EMAIL_SCRIPT_LINK, {
      method: "post",
      body: formData,
    });
  };

  const background = (
    <AppImage
      isVisible={isSectionVisible}
      overlayOpacity={0.3}
      className="h-full w-full"
      src="landing_1.jpg"
    />
  );

  return (
    <Section ref={ref} container={false} background={background}>
      <Anchor id={REVIEW_SECTION_ID} />
      <div className="py-16">
        <div
          data-aos={!isSmDown && "flip-left"}
          className="w-full max-w-lg mx-auto bg-white text-black py-7 rounded-none sm:rounded-lg shadow-xl"
        >
          <div className="text-center">
            <SectionTitle>Atsiliepimai</SectionTitle>
            <p className="mt-2 text-lg">Mums svarbi jūsų nuomonė!</p>
          </div>
          <form
            className="max-w-xl mx-auto w-full mt-16 px-3 sm:px-7"
            method="POST"
            onSubmit={handleFormSubmit}
          >
            <TextField
              label="El. paštas"
              placeholder="Jūsų el. paštas"
              type="email"
              name="email"
              value={email}
              onChange={setEmail}
            />
            <TextField
              label="Vardas"
              className="mt-3"
              placeholder="Jūsų vardas"
              name="name"
              type="text"
              value={name}
              onChange={setName}
            />
            <TextField
              label="Atsiliepimas"
              className="mt-3"
              multiline
              placeholder="Jūsų atsiliepimas"
              type="text"
              name="review"
              value={review}
              onChange={setReview}
            />
            <div className="mt-4 text-right">
              <Button>Siųsti</Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ReviewSection;
