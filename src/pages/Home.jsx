import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Treks from "../components/Treks";
import Testimonial from "../components/Testimonial";
import ".././App.css";
function home() {
  return (
    <>
      <Header />
      <Banner />
      <Treks />
      <Testimonial />
      <Footer />
    </>
  );
}

export default home;
