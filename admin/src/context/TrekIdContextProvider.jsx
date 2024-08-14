import React, { useState } from "react";
import TrekIdContext from "./TrekIdContext";

const TrekIdContextProvider = ({ children }) => {
  const [IdValue, setIdValue] = useState(null);
  return (
    <TrekIdContext.Provider value={{ IdValue, setIdValue }}>
      {children}
    </TrekIdContext.Provider>
  );
};

export default TrekIdContextProvider;
