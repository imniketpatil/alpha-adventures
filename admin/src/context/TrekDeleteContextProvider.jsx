import React, { useState } from "react";
import TrekDeleteContext from "./TrekDeleteContext";

const TrekDeleteContextProvider = ({ children }) => {
  const [openDeleteBox, setDeleteBox] = useState(false);
  return (
    <TrekDeleteContext.Provider value={{ openDeleteBox, setDeleteBox }}>
      {children}
    </TrekDeleteContext.Provider>
  );
};

export default TrekDeleteContextProvider;
