import React from "react";
import TempSpace from "../components/TempSpace";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TrekDetailsComponent from "../components/TrekDetailsComponent";

function RatangadTrek() {
  return (
    <>
      <TempSpace />
      <Header type="list" />
      <TrekDetailsComponent />
      <Footer />
    </>
  );
}

export default RatangadTrek;
