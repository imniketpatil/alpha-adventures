import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TempSpace from "../components/TempSpace";
import ShopMain from "../components/ShopMain";

function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TempSpace />
      <Header type="list" />
      <ShopMain />
      <Footer />
    </>
  );
}

export default Shop;
