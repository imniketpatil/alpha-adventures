import React, { useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function KalsubaiPeakTrek() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header type="list" />
      <Footer />
    </>
  );
}

export default KalsubaiPeakTrek;
