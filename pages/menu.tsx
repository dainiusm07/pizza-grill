import { NextComponentType } from "next";
import Head from "next/head";
import React from "react";
import { COMPANY_NAME } from "../common/constants";
import AppImage from "../components/AppImage/AppImage";
import Button from "../components/Button/Button";
import Section from "../components/Section/Section";
import { useMediaDown } from "../hooks/useMediaDown.hook";

const menuPdfFilename = "pizza-grill-menu.pdf";

const MenuPage: NextComponentType = () => {
  const isSmDown = useMediaDown("sm");

  const normalView = (
    <embed
      className="h-screen w-full"
      type="application/pdf"
      src={menuPdfFilename}
    />
  );

  const background = (
    <AppImage
      isVisible={true}
      className="h-full w-full"
      overlayOpacity={0.5}
      src="landing_1.jpg"
    />
  );

  const mobileView = (
    <Section className="h-screen" background={background}>
      <div className="h-full flex text-center flex-col align-middle justify-center">
        <a href={menuPdfFilename} download>
          <Button size="large">Atsisiųsti meniu</Button>
        </a>
      </div>
    </Section>
  );

  return (
    <>
      <Head>
        <title>Meniu | {COMPANY_NAME}</title>
        <meta
          name="description"
          content="Pizza & Grill – tai picų ir ant žarijų kepamų patiekalų laisvalaikio restoranėlis, įsikūręs turistų pamėgtame mieste - Trakuose."
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      {isSmDown ? mobileView : normalView}
    </>
  );
};

export default MenuPage;
