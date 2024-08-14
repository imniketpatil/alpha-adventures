import React, { useState } from "react";
import DateDeleteContext from "./DateDeleteContext";

const DateDeleteContextProvider = ({ children }) => {
  const [openDeleteDateBox, setDeleteDateBox] = useState(false);
  return (
    <DateDeleteContext.Provider value={{ openDeleteDateBox, setDeleteDateBox }}>
      {children}
    </DateDeleteContext.Provider>
  );
};

export default DateDeleteContextProvider;
