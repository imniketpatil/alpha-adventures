import React, { useState } from "react";
import AddNewTrekDateTrekIdContext from "./AddNewTrekDateTrekIdContext";

const AddNewTrekDateTrekIdContextProvider = ({ children }) => {
  const [IdForTrek, setIdForTrek] = useState();
  return (
    <AddNewTrekDateTrekIdContext.Provider value={{ IdForTrek, setIdForTrek }}>
      {children}
    </AddNewTrekDateTrekIdContext.Provider>
  );
};

export default AddNewTrekDateTrekIdContextProvider;
