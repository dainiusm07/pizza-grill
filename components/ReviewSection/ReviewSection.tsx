import clsx from "clsx";
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

  const [formStatus, setFormStatus] = useState<"success" | "error">(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setFormStatus(null);
    e.preventDefault();

    const formData = new FormData();

    formData.append("email", email);
    formData.append("name", name);
    formData.append("review", review);

    try {
      const response = await fetch(GOOGLE_SHEETS_EMAIL_SCRIPT_LINK, {
        method: "post",
        body: formData,
      }).then((response) => response.json());

      if (response.result === "success") {
        setFormStatus("success");
        setEmail("");
        setName("");
        setReview("");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const background = (
    <AppImage
      isVisible={isSectionVisible}
      overlayOpacity={0.3}
      className="h-full w-full"
      src="landing_1.jpg"
    />
  );

  const successMessage = "Atsiliepimas sėkmingai išsiųstas!";
  const errorMessage = "Atsiliepimo išsiųsti nepavyko!";

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
            className="max-w-xl mx-auto w-full mt-10 px-5 sm:px-7"
            method="POST"
            onSubmit={handleFormSubmit}
          >
            {formStatus && (
              <div className="mb-7 text-white font-semibold text-center text-lg">
                <div
                  className={clsx(
                    formStatus === "success" ? "bg-green-500" : "bg-red-500",
                    "py-3 px-5 rounded-md"
                  )}
                >
                  {formStatus === "success" ? successMessage : errorMessage}
                </div>
              </div>
            )}
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
