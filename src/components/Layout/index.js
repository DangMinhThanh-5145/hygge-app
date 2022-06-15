import Footer from "../Footer";
import Header from "../Header";
import Newsletter from "../Newsletter";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Layout;
