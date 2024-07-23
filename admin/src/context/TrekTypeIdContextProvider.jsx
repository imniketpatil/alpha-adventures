import React, { useState } from "react";
import TrekTypeIdContext from "./TrekTypeIdContext.js";

const TrekTypeIdContextProvider = ({ children }) => {
  const [IdValue, setIdValue] = useState(null);
  return (
    <TrekTypeIdContext.Provider value={{ IdValue, setIdValue }}>
      {children}
    </TrekTypeIdContext.Provider>
  );
};

export default TrekTypeIdContextProvider;
