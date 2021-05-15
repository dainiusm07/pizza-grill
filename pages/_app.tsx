import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
