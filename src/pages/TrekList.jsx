import React, { useEffect } from "react";
import Header from "../components/Header";
import SearchList from "../components/SearchList";
import TempSpace from "../components/TempSpace";

function TrekList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TempSpace />
      <Header type="list" />
      <SearchList />
    </div>
  );
}

export default TrekList;
