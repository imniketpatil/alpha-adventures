import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection.jsx";
import TempSpace from "../components/TempSpace.jsx";
import AboutSectionUIComponent from "../components/AboutSectionUIComponent.jsx";
import Details from "../components/Details.jsx";
import Achievements from "../components/Achievements.jsx";
import InstagramSection from "../components/InstagramSection.jsx";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TempSpace />
      <Header type="list" />
      <AboutSectionUIComponent />
      <Details />
      <Achievements />
      <InstagramSection />
      <TeamSection />
      <Footer />
    </>
  );
}

export default About;
