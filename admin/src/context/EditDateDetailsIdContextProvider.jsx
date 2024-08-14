import React, { useState } from "react";
import EditDateDetailsIdContext from "./EditDateDetailsIdContext.js";

const EditDateDetailsIdContextProvider = ({ children }) => {
  const [IdForDateDetails, setIdForDateDetails] = useState(null);
  return (
    <EditDateDetailsIdContext.Provider
      value={{ IdForDateDetails, setIdForDateDetails }}
    >
      {children}
    </EditDateDetailsIdContext.Provider>
  );
};

export default EditDateDetailsIdContextProvider;
