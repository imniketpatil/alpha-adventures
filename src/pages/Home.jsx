import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Treks from "../components/Treks";
import ".././App.css";
import Testimonal from "../components/Testimonal";
import WhyUs from "../components/WhyUs";
function home() {
  return (
    <>
      <Header />
      <Banner />
      <Treks />
      <Testimonal />
      <WhyUs />
      <Footer />
    </>
  );
}

export default home;
