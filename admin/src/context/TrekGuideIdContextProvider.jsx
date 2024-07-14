import React, { useState } from "react";
import TrekGuideIdContext from "./TrekGuideIdContext.js";

const TrekGuideIdContextProvider = ({ children }) => {
  const [IdValue, setIdValue] = useState(null);
  return (
    <TrekGuideIdContext.Provider value={{ IdValue, setIdValue }}>
      {children}
    </TrekGuideIdContext.Provider>
  );
};

export default TrekGuideIdContextProvider;
