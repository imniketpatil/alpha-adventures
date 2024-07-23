import React, { useState } from "react";
import TrekTypeDeleteContext from "./TrekTypeDeleteContext";

const TrekTypeDeleteContextProvider = ({ children }) => {
  const [openDeleteBox, setDeleteBox] = useState(false);
  return (
    <TrekTypeDeleteContext.Provider value={{ openDeleteBox, setDeleteBox }}>
      {children}
    </TrekTypeDeleteContext.Provider>
  );
};

export default TrekTypeDeleteContextProvider;
