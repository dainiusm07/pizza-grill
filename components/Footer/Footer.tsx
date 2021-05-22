import clsx from "clsx";
import {
  COMPANY_NAME,
  COMPANY_PHONE_NUMBER,
  COMPANY_ADDRESS,
  COMPANY_MAPS_LINK,
  COMPANY_EMAIL,
  CONTACTS_SECTION_ID,
  COMPANY_FACEBOOK_LINK,
} from "../../common/constants";
import useVisibility from "../../hooks/useVisibility.hook";
import AppImage from "../AppImage/AppImage";
import ContentContainer from "../ContentContainer/ContentContainer";
import { workingHours } from "./Footer.data";

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  const titleClass = "font-semibold text-lg";
  const paragraphClass = "mt-6 text-gray-400";

  const [isVisible, ref] = useVisibility();

  return (
    <footer
      ref={ref}
      className="bg-black text-white px-3 lg:px-0 text-center lg:text-left"
    >
      <ContentContainer className="flex flex-row flex-wrap pt-20 pb-10">
        <div className="w-full lg:w-1/3">
          <div className="max-w-md mx-auto">
            <h5 className={titleClass}>{COMPANY_NAME}</h5>
            <p className={paragraphClass}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ipsa
              asperiores pariatur quasi itaque inventore fuga libero eius quos
              ex dolorum
            </p>
          </div>
          <div className="w-full lg:w-1/3 mt-10 flex justify-center lg:justify-start">
            <a href={COMPANY_FACEBOOK_LINK}>
              <AppImage
                isVisible={isVisible}
                className="h-8 w-8 rounded-full"
                src="facebook-flat.svg"
              />
            </a>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 min-w-52 lg:px-16 sm:pr-5 mt-10 lg:mt-0">
          <h5 className={titleClass}>Darbo laikas</h5>
          <div className={clsx(paragraphClass, "max-w-xs mx-auto")}>
            {workingHours.map(({ day, from, to }) => (
              <div key={day} className="flex mb-1">
                <div>{day}</div>
                <div className="flex-1 text-right">
                  {from}-{to}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id={CONTACTS_SECTION_ID}
          className="w-full sm:w-1/2 lg:w-1/3 mt-10 lg:mt-0 sm:pl-5 lg:pl-0"
        >
          <h5 className={titleClass}>Kontaktai</h5>
          <div className={paragraphClass}>
            <div className="mb-1">
              <div className="inline-block mr-2">Telefonas:</div>
              <a
                className="text-gray-300 hover:text-white"
                href={`tel:${COMPANY_PHONE_NUMBER}`}
              >
                {COMPANY_PHONE_NUMBER}
              </a>
            </div>
            <div className="mb-1">
              <div className="inline-block mr-2">Adresas:</div>
              <a
                className="text-gray-300 hover:text-white"
                href={COMPANY_MAPS_LINK}
              >
                {COMPANY_ADDRESS}
              </a>
            </div>
            <div className="mb-1">
              <div className="inline-block mr-2">El. pastas:</div>
              <div className="text-gray-300 inline-block">{COMPANY_EMAIL}</div>
            </div>
          </div>
        </div>
      </ContentContainer>
      <div className="text-center py-6 text-gray-400">
        Copyright {currentYear} - {COMPANY_NAME}
      </div>
    </footer>
  );
};

export default Footer;
