import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TempSpace from "../components/TempSpace";
import RefundPolicy from "../components/RefundPolicy";

function RefundCancellationPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TempSpace />
      <Header type="list" />
      <RefundPolicy />
      <Footer />
    </>
  );
}

export default RefundCancellationPolicy;
