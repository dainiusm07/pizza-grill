import "tailwindcss/tailwind.css";
import "aos/dist/aos.css";
import "../styles/CarouselOverrides.css";

import { useEffect } from "react";
import { AppProps } from "next/app";
import Aos from "aos";
import Layout from "../components/Layout/Layout";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    Aos.init({ once: true, delay: 100 });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
