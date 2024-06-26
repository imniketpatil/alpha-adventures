import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TrekList from "./TrekList";
import TrekItem from "../components/TrekItem";
import Treks from "../components/Treks.jsx";
import TeamSection from "../components/TeamSection.jsx";
import TempSpace from "../components/TempSpace.jsx";
import AboutSectionUIComponent from "../components/AboutSectionUIComponent.jsx";
import Details from "../components/Details.jsx";

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
      <TeamSection />
      <Footer />
    </>
  );
}

export default About;
