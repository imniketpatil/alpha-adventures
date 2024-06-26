import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function TrekMainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <TrekMainPage />
      <Footer />
    </>
  );
}

export default TrekMainPage;
