import React from "react";
import Header from "../components/Header";
import TempSpace from "../components/TempSpace";
import Footer from "../components/Footer";
import TrekDetailsMainPage from "../components/TrekDetailsMainPage";

function TrekDetails() {
  return (
    <>
      <Header type="list" />
      <TempSpace />
      <TrekDetailsMainPage />
      <Footer />
    </>
  );
}

export default TrekDetails;
