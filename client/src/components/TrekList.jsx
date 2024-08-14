import React from "react";

function TrekList() {
  return (
    <>
      <TextField
        id="trek-search" // Provide a unique id for the TextField
        {...params}
        label=""
        sx={{
          height: "32px", // Reduce the height of the input box
          "& .MuiInputBase-root": {
            height: "32px", // Ensure the height is consistent
          },
          "& .MuiInputLabel-root": {
            lineHeight: "32px", // Adjust line height for label alignment
          },
        }}
        InputLabelProps={{
          style: {
            textAlign: "center",
            width: "100%",
            zIndex: "100",
          },
        }}
      />
    </>
  );
}

export default TrekList;
