import "tailwindcss/tailwind.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "../styles/CarouselOverrides.css";

import { useEffect } from "react";
import { AppProps } from "next/app";
import Aos from "aos";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/dist/client/router";
import { useMediaDown } from "../hooks/useMediaDown.hook";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const isSmDown = useMediaDown("sm");

  useEffect(() => {
    Aos.init({ once: true, delay: 100 });
  }, []);

  const content = <Component {...pageProps} />;

  return router.pathname === "/menu"! && !isSmDown ? (
    content
  ) : (
    <Layout>{content}</Layout>
  );
};

export default App;
