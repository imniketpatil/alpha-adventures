import React, { useState } from "react";
import TestimonialEditContext from "./TestimonialEditContext.js";

const TestimonialEditContextProvider = ({ children }) => {
  const [openTestimonialEditForm, setTestimonialEditForm] = useState(false);
  return (
    <TestimonialEditContext.Provider
      value={{ openTestimonialEditForm, setTestimonialEditForm }}
    >
      {children}
    </TestimonialEditContext.Provider>
  );
};

export default TestimonialEditContextProvider;
