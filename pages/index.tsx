import { NextComponentType } from "next";
import Head from "next/head";
import React from "react";
import { COMPANY_NAME } from "../common/constants";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import DailyLunchMenuSection from "../components/DailyLunchMenuSection/DailyLunchMenuSection";
import LandingSection from "../components/LandingSection/LandingSection";
import ReviewSection from "../components/ReviewSection/ReviewSection";

const HomePage: NextComponentType = () => {
  const title = `Pagrindinis | ${COMPANY_NAME}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta
          name="description"
          content="Pizza & Grill – tai picų ir ant žarijų kepamų patiekalų laisvalaikio restoranėlis, įsikūręs turistų pamėgtame mieste - Trakuose."
        />
        <link rel="preload" href="logo.png" as="image" />
        <link rel="preload" href="landing_1.jpg" as="image" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LandingSection />
      <AboutUsSection />
      <DailyLunchMenuSection />
      <ReviewSection />
    </>
  );
};

export default HomePage;
