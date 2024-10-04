import React from "react";
import StackOfTreks from "./StackOfTreks";

function TrekTypeTreksComponent({ treksBasedOnTrekType }) {
  return (
    <>
      <StackOfTreks treksBasedOnTrekType={treksBasedOnTrekType} />
    </>
  );
}

export default TrekTypeTreksComponent;
