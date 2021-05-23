import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ContentContainer from "../ContentContainer/ContentContainer";
import { navigationItems } from "./NavBar.data";
import { useScroll } from "../../hooks/useScroll.hook";
import { LANDING_SECTION_ID } from "../../common/constants";
import AppImage from "../AppImage/AppImage";
import { useMediaDown } from "../../hooks/useMediaDown.hook";
import MenuButton from "../MenuButton/MenuButton";

const NavBar: React.FC = () => {
  const isScrolledDown = useScroll(300);
  const isMdDown = useMediaDown("md");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  const handleMenuButtonClick = () => {
    setMenuOpen((open) => !open);
  };

  const isExpanded = isScrolledDown && !isMdDown;

  const renderNavigationItems = (menuView?: boolean) =>
    navigationItems.map(({ href, title }) => (
      <li
        key={title}
        className={clsx("font-primary uppercase mx-4", menuView && "mb-5")}
        onClick={handleNavigation}
      >
        <Link href={href}>{title}</Link>
      </li>
    ));

  return (
    <header>
      <nav
        className={clsx(
          "inset-x-0 z-50 shadow-md",
          isExpanded
            ? `absolute bg-black text-white bg-opacity-20 border-t-0
            border-l-0 border-r-0 border border-white border-opacity-10
            backdrop-filter backdrop-blur-1`
            : "fixed bg-white text-black",
          isMdDown && "px-3",
          (isMdDown === null || isScrolledDown === null) && "hidden"
        )}
      >
        <ContentContainer
          className={clsx(
            "max-w-5xl mx-auto flex justify-between items-center transition-spacing",
            isExpanded ? "py-5 text-xl" : "py-2"
          )}
        >
          <Link href={`/#${LANDING_SECTION_ID}`}>
            <a onClick={handleNavigation}>
              <AppImage
                className={clsx(
                  "rounded-full",
                  isExpanded
                    ? "h-16 w-16 border border-white border-opacity-20"
                    : "h-12 w-12"
                )}
                lazyLoad={false}
                src="logo.png"
              />
            </a>
          </Link>

          {isMdDown ? (
            <MenuButton
              mode={menuOpen ? "close" : "open"}
              onClick={handleMenuButtonClick}
            />
          ) : (
            <ul className="flex">{renderNavigationItems()}</ul>
          )}
        </ContentContainer>
      </nav>
      {isMdDown && (
        <div
          className={clsx(
            "fixed bg-white inset-0 z-40 flex text-3xl items-center justify-center transform transition",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <ul className="flex-1 text-center">{renderNavigationItems(true)}</ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
