import React from "react";
import Header from "../components/Header";
import SearchList from "../components/SearchList";
import { useLocation } from "react-router-dom";

function TrekList() {
  return (
    <div>
      <Header type="list" />
      <SearchList />
    </div>
  );
}

export default TrekList;
