import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main className="text-white">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
