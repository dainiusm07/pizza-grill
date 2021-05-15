import clsx from "clsx";
import React from "react";
import Link from "next/link";
import ContentContainer from "../ContentContainer/ContentContainer";
import { navigationItems } from "./NavBar.data";
import { useNavBarExpansion } from "./NavBar.hooks";
import { LANDING_SECTION_ID } from "../../common/constants";
import AppImage from "../AppImage/AppImage";

const classes = {
  wrapper: {
    normal: "fixed bg-white text-black",
    expanded:
      "absolute bg-black text-white bg-opacity-20 border-white border-opacity-10",
  },
  container: {
    normal: "py-2",
    expanded: "py-5 text-xl",
  },
  logo: {
    normal: "h-12 w-12",
    expanded: "h-16 w-16 border border-white border-opacity-20",
  },
};

const NavBar: React.FC = () => {
  const expanded = useNavBarExpansion();

  const getDynamicClass = (classOf: keyof typeof classes) => {
    if (expanded) {
      return classes[classOf].expanded;
    }

    return classes[classOf].normal;
  };

  return (
    <header
      className={clsx(
        "inset-x-0 z-10 shadow-md border-t-0 border-l-0 border-r-0 border",
        getDynamicClass("wrapper")
      )}
    >
      <nav>
        <ContentContainer
          className={clsx(
            "max-w-5xl mx-auto flex justify-center transition-spacing duration-300",
            getDynamicClass("container")
          )}
        >
          <div className="flex items-center">
            <Link href={`#${LANDING_SECTION_ID}`}>
              <a href={`#${LANDING_SECTION_ID}`}>
                <AppImage
                  className={clsx("rounded-full", getDynamicClass("logo"))}
                  src="site_logo.jpeg"
                />
              </a>
            </Link>

            <ul className="flex ml-20">
              {navigationItems.map(({ href, title }) => (
                <li key={title} className="font-primary uppercase mx-4">
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </ContentContainer>
      </nav>
    </header>
  );
};

export default NavBar;
