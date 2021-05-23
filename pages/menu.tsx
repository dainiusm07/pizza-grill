import { NextComponentType } from "next";
import React from "react";
import Section from "../components/Section/Section";
import { MENU_PDF_LINK } from "../common/constants";

const MenuPage: NextComponentType = () => {
  const menuFrame = (
    <iframe
      className="h-screen w-full"
      src={`http://docs.google.com/gview?url=${MENU_PDF_LINK}&embedded=true`}
    />
  );

  return <Section container={false}>{menuFrame}</Section>;
};

export default MenuPage;
