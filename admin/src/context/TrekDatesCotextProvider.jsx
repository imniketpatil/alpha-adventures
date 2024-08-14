import React, { useState } from "react";
import TrekDatesContext from "./TrekDatesContext.js";

const TrekDatesCotextProvider = ({ children }) => {
  const [openDatesBox, setDatesBox] = useState(false);
  return (
    <TrekDatesContext.Provider value={{ openDatesBox, setDatesBox }}>
      {children}
    </TrekDatesContext.Provider>
  );
};

export default TrekDatesCotextProvider;
