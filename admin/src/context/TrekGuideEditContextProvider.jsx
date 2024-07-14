import React, { useState } from "react";
import TrekGuideEditContext from "./TrekGuideEditContext.js";

const TrekGuideEditContextProvider = ({ children }) => {
  const [openEditForm, setEditForm] = useState(false);
  return (
    <TrekGuideEditContext.Provider value={{ openEditForm, setEditForm }}>
      {children}
    </TrekGuideEditContext.Provider>
  );
};

export default TrekGuideEditContextProvider;
