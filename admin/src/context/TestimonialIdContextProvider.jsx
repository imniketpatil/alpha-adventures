import React, { useState } from "react";
import TestimonialIdContext from "./TestimonialIdContext.js";

const TestimonialIdContextProvider = ({ children }) => {
  const [IdValue, setIdValue] = useState(null);
  return (
    <TestimonialIdContext.Provider value={{ IdValue, setIdValue }}>
      {children}
    </TestimonialIdContext.Provider>
  );
};

export default TestimonialIdContextProvider;
