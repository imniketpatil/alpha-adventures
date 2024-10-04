import React from "react";
import Header from "../components/Header";
import TempSpace from "../components/TempSpace";
import Footer from "../components/Footer";
import TrekTypeTreksComponent from "../components/TrekTypeTreksComponent";

function TrekTypeTreksPage() {
  return (
    <>
      <Header type="list" />
      <TempSpace />
      <TrekTypeTreksComponent />
      <Footer />
    </>
  );
}

export default TrekTypeTreksPage;
