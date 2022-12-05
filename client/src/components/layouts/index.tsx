import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function Layouts() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layouts;
