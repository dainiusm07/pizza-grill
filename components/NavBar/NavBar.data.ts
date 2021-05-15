import {
  ABOUT_US_SECTION_ID,
  CONTACTS_SECTION_ID,
  DAILY_LUNCH_MENU_SECTION_ID,
  REVIEW_SECTION_ID,
} from "../../common/constants";

type NavigationItem = {
  href: string;
  title: string;
};

export const navigationItems: NavigationItem[] = [
  {
    href: "/meniu",
    title: "Meniu",
  },
  {
    href: "#" + ABOUT_US_SECTION_ID,
    title: "Apie mus",
  },
  {
    href: "#" + DAILY_LUNCH_MENU_SECTION_ID,
    title: "Dienos pietus",
  },
  {
    href: "#" + REVIEW_SECTION_ID,
    title: "Atsiliepimas",
  },
  {
    href: "#" + CONTACTS_SECTION_ID,
    title: "Kontaktai",
  },
];
