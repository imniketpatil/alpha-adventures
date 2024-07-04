import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TrekkingPoint from "../components/TrekkingPoint";
import TempSpace from "../components/TempSpace";

function Sahyadri() {
  return (
    <>
      <TempSpace />
      <Header type="list" />
      <TrekkingPoint />
      <Footer />
    </>
  );
}

export default Sahyadri;
