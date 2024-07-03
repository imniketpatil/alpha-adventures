import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import TempSpace from "../components/TempSpace.jsx";
import TrekDetailsComponent from "../components/TrekDetailsComponent.jsx";

function KalsubaiPeakTrek() {
  return (
    <>
      <TempSpace />
      <Header type="list" />
      <TrekDetailsComponent />
      <Footer />
    </>
  );
}

export default KalsubaiPeakTrek;
