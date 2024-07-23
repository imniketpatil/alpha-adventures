import React, { useState } from "react";
import TrekTypeEditContext from "./TrekTypeEditContext.js";

const TrekTypeEditContextProvider = ({ children }) => {
  const [openEditForm, setEditForm] = useState(false);
  return (
    <TrekTypeEditContext.Provider value={{ openEditForm, setEditForm }}>
      {children}
    </TrekTypeEditContext.Provider>
  );
};

export default TrekTypeEditContextProvider;
