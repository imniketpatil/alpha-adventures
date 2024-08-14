import React, { useState } from "react";
import DateIdContext from "./DateIdContext.js";

const DateIdContextProvider = ({ children }) => {
  const [IdForDate, setIdForDate] = useState(null);
  return (
    <DateIdContext.Provider value={{ IdForDate, setIdForDate }}>
      {children}
    </DateIdContext.Provider>
  );
};

export default DateIdContextProvider;
