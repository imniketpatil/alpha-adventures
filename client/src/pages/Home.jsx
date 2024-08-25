import React, { useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ".././App.css";
import Testimonal from "../components/Testimonal";
import TeamSection from "../components/TeamSection.jsx";
import TailwindComponent from "../components/TailwindComponent.jsx";
import AppPromo from "../components/AppPromo.jsx";
import Achievements from "../components/Achievements.jsx";
import ToTop from "../components/ToTop.jsx";
import TrekFilterSectionHome from "../components/TrekFilterSectionHome.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";

function home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <TrekFilterSectionHome />
      <TailwindComponent />
      <AppPromo />
      <Achievements />
      <Testimonal />
      <TeamSection />
      <Footer />
      <ToTop />
      <WhatsAppButton />
    </>
  );
}

export default home;
