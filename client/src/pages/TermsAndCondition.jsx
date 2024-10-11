import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TempSpace from "../components/TempSpace";
import TermsConditions from "../components/TermsConditions";

function TermsAndCondition() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TempSpace />
      <Header type="list" />
      <TermsConditions />
      <Footer />
    </>
  );
}

export default TermsAndCondition;
