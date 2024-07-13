import React, { useState } from "react";
import TestimonialEditContext from "./TestimonialEditContext.js";

const TestimonialEditContextProvider = ({ children }) => {
  const [openEditForm, setEditForm] = useState(false);
  return (
    <TestimonialEditContext.Provider value={{ openEditForm, setEditForm }}>
      {children}
    </TestimonialEditContext.Provider>
  );
};

export default TestimonialEditContextProvider;
