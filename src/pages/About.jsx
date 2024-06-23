import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TrekList from "./TrekList";
import TrekItem from "../components/TrekItem";
import Treks from "../components/Treks.jsx";
import TeamSection from "../components/TeamSection.jsx";
import TempSpace from "../components/TempSpace.jsx";

function About() {
  return (
    <>
      <TempSpace />
      <Header type="list" />
      <Treks />
      <TeamSection />
      <Footer />
    </>
  );
}

export default About;
