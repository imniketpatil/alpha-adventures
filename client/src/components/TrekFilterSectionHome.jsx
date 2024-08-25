import React, { useEffect, useState } from "react";
import useGetUpcommingTreks from "../hooks/useGetUpcommingTreks";
import TrekSliderComponent from "./TrekSliderComponent";
import { useQuery } from "@tanstack/react-query";
// import useTrekStore from "../app/trekStore";
import LoadingSpinner from "./LoadingSpinner";
import UpcomingTreks from "./UpcomingTreks";
import TrekBasedOnPrice from "./TrekBasedOnPrice";
import TreksBasedOnDifficulty from "./TreksBasedOnDifficulty";
import TrekTypesButtonAndSlider from "./TrekTypesButtonAndSlider";

const TrekFilterSectionHome = () => {
  return (
    <section className="text-black bg-white body-font lg:mt-0  font-body">
      <div className="container px-2 pt-8 pb-8 lg:pb-12 lg:pt-8 mx-auto">
        <UpcomingTreks />

        <TrekTypesButtonAndSlider />

        <TrekBasedOnPrice />

        <TreksBasedOnDifficulty />
      </div>
    </section>
  );
};

export default TrekFilterSectionHome;
