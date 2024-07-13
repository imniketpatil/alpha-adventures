import React from "react";
import ClipLoader from "react-spinners/ClipLoader"; // Importing a spinner from react-spinners

const LoadingSpinner = ({ loading }) => {
  return (
    <div
      style={{
        display: loading ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ClipLoader loading={loading} size={50} />
    </div>
  );
};

export default LoadingSpinner;
