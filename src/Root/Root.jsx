import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Header from "../Components/Shared/Header/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
