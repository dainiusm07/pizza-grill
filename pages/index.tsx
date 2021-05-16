import { NextComponentType } from "next";
import Head from "next/head";
import React from "react";
import { PAGE_TITLE } from "../common/constants";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import DailyLunchMenuSection from "../components/DailyLunchMenuSection/DailyLunchMenuSection";
import LandingSection from "../components/LandingSection/LandingSection";
import ReviewSection from "../components/ReviewSection/ReviewSection";

const HomePage: NextComponentType = () => {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LandingSection />
      <AboutUsSection />
      <DailyLunchMenuSection />
      <ReviewSection />
    </>
  );
};

export default HomePage;
