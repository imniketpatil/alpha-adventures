import React, { useState } from "react";
import TestimonialDeleteContext from "./TestimonialDeleteContext";

const TestimonialDeleteContextProvider = ({ children }) => {
  const [openDeleteBox, setDeleteBox] = useState(false);
  return (
    <TestimonialDeleteContext.Provider value={{ openDeleteBox, setDeleteBox }}>
      {children}
    </TestimonialDeleteContext.Provider>
  );
};

export default TestimonialDeleteContextProvider;
