import React from "react";
import Header from "../components/Header";
import TempSpace from "../components/TempSpace";
import Footer from "../components/Footer";
import TrekTypeTreksComponent from "../components/TrekTypeTreksComponent";
import ShopMain from "../components/ShopMain";

function TrekTypeTreksPage() {
  return (
    <>
      <Header type="list" />
      <TempSpace />
      <TrekTypeTreksComponent />
      {/* <ShopMain /> */}
      <Footer />
    </>
  );
}

export default TrekTypeTreksPage;
