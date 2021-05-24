import { NextComponentType } from "next";
import Head from "next/head";
import React from "react";
import { COMPANY_NAME, MENU_PDF_LINK } from "../common/constants";

const MenuPage: NextComponentType = () => {
  const menuFrame = (
    <iframe
      className="h-screen w-full"
      src={`http://docs.google.com/gview?url=${MENU_PDF_LINK}&embedded=true`}
    />
  );

  return (
    <>
      <Head>
        <title>Meniu | {COMPANY_NAME}</title>
      </Head>
      {menuFrame}
    </>
  );
};

export default MenuPage;
