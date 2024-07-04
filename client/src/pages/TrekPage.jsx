import React, { useEffect } from "react";
import Header from "../components/Header";
import TempSpace from "../components/TempSpace";
function TrekPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TempSpace />
      <Header type="list" />
      Shop
    </>
  );
}

export default TrekPage;
