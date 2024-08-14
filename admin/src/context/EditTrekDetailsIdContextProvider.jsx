import React, { useState } from "react";
import EditTrekDetailsIdContext from "./EditTrekDetailsIdContext.js";

const EditTrekDetailsIdContextProvider = ({ children }) => {
  const [IdForTrekDetails, setIdForTrekDetails] = useState(null);
  return (
    <EditTrekDetailsIdContext.Provider
      value={{ IdForTrekDetails, setIdForTrekDetails }}
    >
      {children}
    </EditTrekDetailsIdContext.Provider>
  );
};

export default EditTrekDetailsIdContextProvider;
