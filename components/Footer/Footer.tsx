import {
  COMPANY_NAME,
  COMPANY_PHONE_NUMBER,
  COMPANY_ADDRESS,
  COMPANY_MAPS_LINK,
  COMPANY_EMAIL,
  CONTACTS_SECTION_ID,
  COMPANY_FACEBOOK_LINK,
} from "../../common/constants";
import AppImage from "../AppImage/AppImage";
import ContentContainer from "../ContentContainer/ContentContainer";
import { workingHours } from "./Footer.data";

const Footer: React.FC = () => {
  const titleClass = "font-semibold text-lg";
  const paragraphClass = "mt-6 text-gray-400";
  const currentYear = new Date().getFullYear();

  return (
    <footer id={CONTACTS_SECTION_ID} className="bg-black text-white">
      <ContentContainer className="flex pt-20 pb-10">
        <div className="w-1/3">
          <div>
            <h5 className={titleClass}>{COMPANY_NAME}</h5>
            <p className={paragraphClass}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ipsa
              asperiores pariatur quasi itaque inventore fuga libero eius quos
              ex dolorum
            </p>
          </div>
          <div className="mt-10 flex">
            <a href={COMPANY_FACEBOOK_LINK}>
              <AppImage className="h-8 w-8" src="facebook-flat.svg" />
            </a>
          </div>
        </div>
        <div className="w-1/3 px-16">
          <h5 className={titleClass}>Darbo laikas</h5>
          <div className={paragraphClass}>
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
        <div className="w-1/3">
          <h5 className={titleClass}>Kontaktai</h5>
          <div className={paragraphClass}>
            <div className="flex mb-1">
              <div className="mr-2">Telefonas:</div>
              <a
                className="hover:text-white"
                href={`tel:${COMPANY_PHONE_NUMBER}`}
              >
                {COMPANY_PHONE_NUMBER}
              </a>
            </div>
            <div className="flex mb-1">
              <div className="mr-2">Adresas:</div>
              <a className="hover:text-white" href={COMPANY_MAPS_LINK}>
                {COMPANY_ADDRESS}
              </a>
            </div>
            <div className="flex mb-1">
              <div className="mr-2">El. pastas:</div>
              <div>{COMPANY_EMAIL}</div>
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
