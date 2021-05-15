import { NextComponentType } from "next";
import React from "react";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import DailyLunchMenuSection from "../components/DailyLunchMenuSection/DailyLunchMenuSection";
import LandingSection from "../components/LandingSection/LandingSection";
import ReviewSection from "../components/ReviewSection/ReviewSection";

const HomePage: NextComponentType = () => {
  return (
    <>
      <LandingSection />
      <AboutUsSection />
      <DailyLunchMenuSection />
      <ReviewSection />
    </>
  );
};

export default HomePage;
