import React from "react";
import useCourseStore from "../app/courseStore";
import { useQuery } from "@tanstack/react-query";
import useGetTreksForTrekTypeById from "../hooks/useGetTreksForTrekTypeById";
import StackOfTreks from "./StackOfTreks";
import FAQ from "./FAQ";

function TrekTypeTreksComponent() {
  const trekTypeId = useCourseStore((state) => state.trekTypeId);

  console.log(trekTypeId);

  const {
    data: TreksForTrekType = [],
    error: treksError,
    isLoading: isLoadingTreks,
  } = useQuery({
    queryKey: ["TreksForTrekType", trekTypeId],
    queryFn: async () => {
      try {
        return await useGetTreksForTrekTypeById({ id: trekTypeId });
      } catch (error) {
        console.error("Error fetching Treks For Trek Type Using Id:", error);
        throw new Error("Failed to fetch Treks For Trek Type Using Id.");
      }
    },
    enabled: !!trekTypeId, // Ensure the query is only enabled if trekTypeId is set
  });

  console.log(TreksForTrekType);

  return (
    <>
      <StackOfTreks TreksForTrekType={TreksForTrekType} />
    </>
  );
}

export default TrekTypeTreksComponent;
