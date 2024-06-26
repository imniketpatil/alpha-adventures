import React, { useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Treks from "../components/Treks";
import ".././App.css";
import Testimonal from "../components/Testimonal";
import WhyUs from "../components/WhyUs";
import TeamSection from "../components/TeamSection.jsx";
import TailwindComponent from "../components/TailwindComponent.jsx";
import AppPromo from "../components/AppPromo.jsx";
import Achievements from "../components/Achievements.jsx";
function home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Treks />
      {/* <UpcomingTreks /> */}
      <TailwindComponent />

      <AppPromo />
      <Achievements />
      <Testimonal />
      <TeamSection />
      <WhyUs />
      <Footer />
    </>
  );
}

export default home;
