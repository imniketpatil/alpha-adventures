import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TempSpace from "../components/TempSpace";

function Bagpacking() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TempSpace />
      <Header type="list" />
      <Footer />
    </>
  );
}

export default Bagpacking;
